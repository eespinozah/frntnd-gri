import T401D001A from './T401D001A';
import T401D001B from './T401D001B';
import T401D002A from './T401D002A';
import T404D001A from './T404D001A';
import T404D002A from './T404D002A';
import T404D002B from './T404D002B';
import T404D003A from './T404D003A';
import T405D001A from './T405D001A';
import T405D002A from './T405D002A';
import T411D001B from './T411D001B';
import T413D002A from './T413D002A';
import T419D001A from './T419D001A';

export const register400 = Vue => {
  [
    T401D001A,
    T401D001B,
    T401D002A,
    T404D001A,
    T404D002A,
    T404D002B,
    T404D003A,
    T405D001A,
    T405D002A,
    T411D001B,
    T413D002A,
    T419D001A
  ].forEach(c => Vue.component(c.name, c));
};
