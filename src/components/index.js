import DisclosureAssigments from './DisclosureAssigments';
import Comments from './Comments';
import Logs from './Logs';
import Region from './Region';
import RegionReadonly from './RegionReadonly';
import Title from './Title';
import Head from './Head';
import Year from './Year';
import Status from './Status';
import StatusIcon from './StatusIcon';
import SignificantLocations from './SignificantLocations';
import SDG from './SDG';
import MaterialTopic from './MaterialTopic';

export const register = Vue => {
  [
    DisclosureAssigments,
    Comments,
    Logs,
    Title,
    Region,
    RegionReadonly,
    Head,
    Year,
    Status,
    StatusIcon,
    SignificantLocations,
    SDG,
    MaterialTopic
  ].forEach(c => Vue.component(c.name, c));
};
