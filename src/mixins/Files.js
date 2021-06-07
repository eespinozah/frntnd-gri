import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import env from '@/environment';

export default {
  props: {
    maxParralelUpload: {
      type: Number,
      default: 3
    }
  },

  computed: {
    handler() {
      return env.handler;
    },
    tenant() {
      return this.$connMrisk.getTenant();
    },
    token() {
      return this.$connMrisk.getAccessToken();
    },
    url() {
      return env.url;
    }
  },

  mounted() {
    this.$on('successFile', ([data, field]) => {
      this.form.setFieldValue(field, data.gid);
      this.$snack.success(this.$lang.t('File was uploaded successfully'));
    });

    this.$on('errorFile', e => {
      this.$snack.error(e.message);
    });
  },

  methods: {
    getPathUpload(nodeId) {
      return `${this.url}/${this.handler}/${this.tenant}/nodes/${nodeId}/elements`;
    },

    getPathDownload(elementId) {
      return `${this.url}/${this.handler}/${this.tenant}/elements/${elementId}/media`;
    },

    upload(path, files, field) {
      from(files).pipe(
        mergeMap(f => this.uploadFile(path, f, field), this.maxParralelUpload)
      )
      .subscribe(
        ()    => { },
        (err) => { },
        ()    => { }
      );
    },

    uploadFile(path, file, field) {
      const self = this;
      const xhr  = new XMLHttpRequest();

      return new Promise((resolve, reject) => {
        xhr.onprogress = e => {
          if (e.lengthComputable) {
            const percentComplete = Math.round(e.loaded * 100 / e.total);
          }
        };

        xhr.onreadystatechange = function(e) {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              self.$emit('successFile', [JSON.parse(this.responseText), field]);
              self.$emit('status', file, 2);
              resolve();
            } else {
              const json = JSON.parse(this.responseText);
              self.$emit('errorFile', json);
              self.$emit('status', file, 3);
              reject();
            }
          }
        };

        xhr.open('POST', path);
        xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);

        const body = new FormData();
        body.append('upload', file);

        self.$emit('status', file, 1);

        xhr.send(body);
      });
    },

    download(path, name) {
      const self = this;
      const xhr  = new XMLHttpRequest();
      xhr.responseType = 'blob';

      xhr.onprogress = e => {
        if (e.lengthComputable) {
          const percentComplete = Math.round(e.loaded * 100 / e.total);
        }
      };

      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const blob = window.URL.createObjectURL(xhr.response);
            const link = document.createElement('a');
            link.href = blob;
            link.download = name;
            document.body.appendChild(link);
            link.click();
            link.remove();

            self.$emit('download success');
          } else {
            self.$emit('download error');
          }
        }
      };

      xhr.open('GET', path);
      xhr.setRequestHeader('Authorization', `Bearer ${this.token}`);
      xhr.send();
    },
    createWindow(url, name, field, width=800, height=600) {
      if (this.win && !this.win.closed) {
        if (this.prvURL === url) {
          this.win.focus();
          return this.win;
        } else {
          this.win.close();
        }
      }

      const left = window.top.outerWidth  / 2 + window.top.screenX - ( width  / 2);
      const top  = window.top.outerHeight / 2 + window.top.screenY - ( height / 2);

      this.prvURL = url;

      const win = this.win = window.open(url,
        name,
        `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);

      const tick = setInterval(() => {
        if (win.closed) {
          window.removeEventListener('message', fnAttach);
          window.removeEventListener('message', fnReady);

          clearInterval(connection);
          clearInterval(tick);
        }
      }, 500);

      const connection = setInterval(() => {
        win.postMessage(JSON.stringify({ storage: true }), '*');
      }, 500);

      const fnReady = async (e) => {
        const data = JSON.parse(e.data);

        if (data.ready) {
          clearInterval(connection);
          window.removeEventListener('message', fnReady);
        }
      }

      window.addEventListener('message', fnReady, false);

      const form = this.form;

      const fnAttach = e => {
        const data = JSON.parse(e.data);

        if (data.element) {
          form.setFieldValue(field, data.element['@id']);
        }
      }

      window.addEventListener('message', fnAttach, false);
    },
    getFieldFileStorage(field, label) {
      return {
        collection: 'storage/element',
        valueField: 'gid',
        textField: 'name',
        label: label || this.$lang.t('Document'),
        name: field,
        type: 'filestorage',
        onAttach: (e, element) => {
          this.createWindow(
            element.getValue('browse_url'),
            'Storage',
            field);
        },
        onDownload: (e, element) => {
          if (!element.getValue('download_url')) {
            return;
          }

          this.createWindow(
            element.getValue('download_url'),
            'Storage',
            field,
            400, 300);
        },
        onUpload: (e, element) => {
          const change = e => {
            const tenant = this.$connMrisk.getTenant();
            const files  = Array.from(e.target.files);

            this.upload(`/rest/${tenant}/storage/upload`, files, field);
          };

          const input = document.createElement('input');
          input.type = 'file';
          input.onchange = e => change(e);
          input.click();
        }
      }
    }
  }
}
