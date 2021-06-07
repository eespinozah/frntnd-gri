import T201D001AI from './T201D001AI';
import T201D001AII from './T201D001AII';
import T202D001A from './T202D001A';
import T202D001C from './T202D001C';
import T204D001A from './T204D001A';
import T205D002A from './T205D002A';
import T205D002B from './T205D002B';
import T205D002C from './T205D002C';
import T205D002D from './T205D002D';
import T205D002E from './T205D002E';
import T206D001A from './T206D001A';

export const register200 = Vue => {
  [
    T201D001AI,
    T201D001AII,
    T202D001A,
    T202D001C,
    T204D001A,
    T205D002A,
    T205D002B,
    T205D002C,
    T205D002D,
    T205D002E,
    T206D001A
  ].forEach(c => Vue.component(c.name, c));
};
