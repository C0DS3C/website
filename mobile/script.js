if (window.matchMedia("(any-pointer:coarse)").matches == false) {
  document.location = '/website/pc';
}

document.getElementById('btc').innerHTML='Copy Bitcoin<br>Wallet Address'
document.getElementById('eth').innerHTML='Copy Ethereum<br>Wallet Address'

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function copyBTC() {
  var el = document.createElement('textarea');
  el.value = 'bc1qlmxhxjpdqll2vdy3706g5w09qc99t0kktgyv2k';
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(el);
  document.getElementById('btc').innerHTML='Copied!'
  sleep(1000).then(() => {document.getElementById('btc').innerHTML = 'Copy Bitcoin<br>Wallet Address'});
}

function copyETH() {
  var el = document.createElement('textarea');
  el.value = '0xf8029c9c747-De4-B6-BBf-D7af9-Aa99d17126-B7029e';
  el.setAttribute('readonly', '');
  el.style = {position: 'absolute', left: '-9999px'};
  document.body.appendChild(el);
  el.select();
  el.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(el);
  document.getElementById('eth').innerHTML='Copied!'
  sleep(1000).then(() => {document.getElementById('eth').innerHTML = 'Copy Ethereum<br>Wallet Address'});
}
