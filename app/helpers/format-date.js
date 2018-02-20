import { helper } from '@ember/component/helper';
import moment from 'moment';

export const formatDate = (epoch) => moment(Number(epoch)).format('h:mma, ddd Do MMMM YYYY');

export default helper(formatDate);
