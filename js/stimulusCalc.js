(($) => {
  $(() =>{
    $(document).on('click', '#tax2019btn', hasFiledTaxTextToggle);
    $(document).on('click', '#tax2018btn', hasFiledTaxTextToggle);
    $(document).on('click', '#tax2019btn', calculateCheck);
    $(document).on('click', '#tax2018btn', calculateCheck);
    $('input').on('change', calculateCheck);
    $('input').on('input', calculateCheck);
    calculateCheck();
  });

  function calculateCheck() {
    let grandTotal = 0;
    if ($('#tax2018btn.active').length && $('#tax2019btn.active').length) {
      grandTotal = 'You should file your 2019 taxes ASAP';
      $('#grand-total').val(grandTotal);
      $('.should-file-taxes').hide();
      return;
    } else {
      $('.should-file-taxes').show();
    }
    const filingStatus = parseInt($("[name=inlineRadioOptions]:checked").val(), 10) || 1;
    const dependents = parseInt($("#dependent-children").val(), 10) || 0;
    const agi = parseInt($("#total-agi").val(), 10) || 0;
    let baseline = 1200;
    let min = 75000;
    let max = 99000;
    if (filingStatus === 2) {
      baseline = 2400;
      min = 150000;
      max = 198000;
    } else if (filingStatus === 3) {
      min = 112500;
      max = 136500;
    }
    const dependentsTotal = dependents * 500;
    if (agi > max) {
      grandTotal = 0;
    } else if (agi > min) {
      const over = (Math.round((agi - min) / 100)) * 5;
      grandTotal = baseline - over;
      grandTotal = grandTotal + dependentsTotal;
    } else {
      grandTotal = baseline;
      grandTotal = grandTotal + dependentsTotal;
    }
    
    $('#grand-total').val(grandTotal);
  }

  function hasFiledTaxTextToggle() {
    const $this = $(this);
    const taxText = $this.html();
    if (taxText.includes('YES')) {
      $this.html(taxText.replace('YES', 'NO'));
    } else {
      $this.html(taxText.replace('NO', 'YES'));
    }
    const oldYear = parseInt($this[0].id.match(/[0-9]{4}/)[0], 10);
    const newYear = oldYear - 1
    const toggledId = $this[0].id.replace(`${oldYear}btn`, newYear);
    $(`#${toggledId}`).toggle();
  }
})($);