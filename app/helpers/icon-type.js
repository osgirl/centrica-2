import { helper } from '@ember/component/helper';

export function iconType(category) {

  if(category.toString() === 'VISIT') {
    return 'boiler'
  }
  switch(category.toString()) {
    case 'VISIT':
      return 'boiler'
    case 'METERREAD':
      return 'meter'
    case 'BILL':
      return 'pound-sign'
    default:
        return 'bell'
} 
  
}

export default helper(iconType);
