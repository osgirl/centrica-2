import { helper } from '@ember/component/helper';
import moment from 'moment';

export function formatDate(epoch) {
  epoch = 1519060249;
  return moment(epoch).format('MMMM Do YYYY, h:mm:ss a');
  const d = new Date(epoch * 1000);
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return `${d.getHours()}:${d.getMinutes()}, ${d.getDay()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default helper(formatDate);
