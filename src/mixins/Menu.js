export default {
  data() {
    const tenant = this.$connMrisk.getTenant();

    return {
      menu: [
        {
          id: 1,
          icon: 'local_library',
          label: this.$lang.t('My disclosures'),
          path: `/${tenant}/site/my-disclosures`,
          exact: false
        },
        {
          id: 2,
          icon: 'work',
          label: this.$lang.t('Management Approach'),
          path: `/${tenant}/site/approach-front`,
          exact: false
        },
        {
          id: 3,
          icon: 'aspect_ratio',
          label: this.$lang.t('General Disclosure'),
          path: `/${tenant}/site/general`,
          exact: false
        },
        {
          id: 4,
          icon: 'monetization_on',
          label: this.$lang.t('Economics'),
          path: `/${tenant}/site/economics`,
          exact: false
        },
        {
          id: 5,
          icon: 'eco',
          label: this.$lang.t('Enviromental'),
          path: `/${tenant}/site/enviromental`,
          exact: false
        },
        {
          id: 6,
          icon: 'people',
          label: this.$lang.t('Social'),
          path: `/${tenant}/site/Social`,
          exact: false
        }
      ]
    }
  }
};
