import { helper } from '@ember/component/helper';

export function buttons(params, {category, alertType}) {

  if (alertType === 'INFO') {
    let btnClass = 'btn-secondary';
    let btnText = 'Find out more';

    if (category === 'VISIT') {
      btnClass = 'btn-primary';
      btnText = 'Change booking';

      return (
        `<a class="btn btn-aem ${btnClass} mt2 pull-right text-bold" role="button" href="#">
          ${btnText}
        </a>`
      );
    }

    return (
      `<a class="btn btn-aem ${btnClass} mt2 pull-right text-bold" role="button" href="#">
        <i class="fa fa-angle-right"></i>${btnText}
      </a>`
    );
  }

  if (alertType === 'ACTIONNEEDED') {
    let btnPrimaryText = '';
    let btnSecondaryText = '';

    if (category === 'BILL') {
      btnPrimaryText = 'Pay';
      btnSecondaryText = 'How to read your bill';
    } else if (category === 'METERREAD') {
      btnPrimaryText = 'Send reading';
      btnSecondaryText = 'Need help?';
    }

    return (
      `<a class="btn btn-aem btn-primary mt2 pull-right text-bold" role="button" href="#">
        ${btnPrimaryText}
      </a>
      <a class="btn btn-aem btn-tertiary mt2 pull-left" role="button" href="#">
        <i class="fa fa-angle-right"></i>${btnSecondaryText}
      </a>`
    );
  }

  if (alertType === 'COMPLETE') {
    return `
<!-- Add icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.checked {
  color: #09f;
}
.center {
  text-align: center;
  padding-top: 10px;
  font-size: 1.5em;
  color: white;
}
</style>
<div class="center">
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star "></span>
</div>
    `;
  }

  return '';
}

export default helper(buttons);
