import { helper } from '@ember/component/helper';

export function formatDate(seconds) {
  const d = new Date(seconds * 1000);
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  
  return `${d.getHours()}:${d.getMinutes()}, ${d.getDay()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

export default helper(formatDate);
