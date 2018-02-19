import { helper } from '@ember/component/helper';

export function buttons(params, { category, alertType }) {
  
  if(alertType === 'INFO') {
    let btnClass = 'btn-secondary';
    let btnText = 'Find out more';

    if(category === 'VISIT') {
      btnClass = 'btn-primary';
      btnText = 'Change booking'
    } 
    return (
      `<a class="btn btn-aem btn-${btnClass} mt2" role="button" href="#">
        <i class="fa fa-angle-right"></i>${btnText}
      </a>`
    );

  }
  if(alertType === 'ACTIONNEEDED') {
    let btnPrimaryText = '';
    let btnSecondaryText = '';

    if(category === 'BILL') {
      btnPrimaryText = 'Pay'
      btnSecondaryText = 'How to read your bill'
    }
    if(category === 'METERREAD') {
      btnPrimaryText = 'Send reading';
      btnSecondaryText = 'Need help?';
    }

    return (
      `<a class="btn btn-aem btn-primary mt2" role="button" href="#">
        <i class="fa fa-angle-right"></i>${btnPrimaryText}
      </a>
      <a class="btn btn-aem btn-tertiary mt2" role="button" href="#">${btnSecondaryText}</a>`
    );
  }
  if(alertType === 'COMPLETE') {
    return 'stars here';
  }


  return '';
}

export default helper(buttons);
