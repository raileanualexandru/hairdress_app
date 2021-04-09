let y = new Date();

let d = y.getDate()+ '/' + (y.getMonth()+1) +'/'+ y.getFullYear();
let val = '/calendar?date=' + d;

document.getElementById('today').setAttribute('href', val);
