import T102D002B from './T102D002B';
import T102D008  from './T102D008';
import T102D008B from './T102D008B';
import T102D020AB from './T102D020AB';
import T102D021AB from './T102D021AB';
import T102D022A from './T102D022A';
import T102D035INFO from './T102D035AINFO';
import T102D040A from './T102D040A';
import T102D043A from './T102D043A';
import T102D045AB from './T102D045AB';

export const register102 = Vue => {
  [
    T102D002B,
    T102D008,
    T102D008B,
    T102D020AB,
    T102D021AB,
    T102D022A,
    T102D035INFO,
    T102D040A,
    T102D043A,
    T102D045AB
  ].forEach(c => Vue.component(c.name, c));
};
