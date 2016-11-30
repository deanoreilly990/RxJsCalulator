import {Observable} from 'rxjs/Rx';
let counter = {value: ""};

const display = document.getElementById("display");
const BT0 = document.getElementById("BT0");
const BT2 = document.getElementById("BT2");
const BT3 = document.getElementById("BT3");
const BT4 = document.getElementById("BT4");
const BT5 = document.getElementById("BT5");
const BT6 = document.getElementById("BT6");
const BT7 = document.getElementById("BT7");
const BT8 = document.getElementById("BT8");
const BT9 = document.getElementById("BT9");
const BT1 = document.getElementById("BT1");
const BTD = document.getElementById("BTD");
const BTT = document.getElementById("BTT");
const BTX = document.getElementById("BTX");
const BTMIN = document.getElementById("BT-");
const BTPLUS = document.getElementById("BT+");
const BTDOT = document.getElementById("BT.");
const BTC = document.getElementById("BTC");
const BTEQ = document.getElementById("BTEQ");


const bt0 = acc => ({value: acc.value + "0"});
const bt1 = acc => ({value: acc.value + "1"});
const bt2 = acc => ({value: acc.value + "2"});
const bt3 = acc => ({value: acc.value + "3"});
const bt4 = acc => ({value: acc.value + "4"});
const bt5 = acc => ({value: acc.value + "5"});
const bt6 = acc => ({value: acc.value + "6"});
const bt7 = acc => ({value: acc.value + "7"});
const bt8 = acc => ({value: acc.value + "8"});
const bt9 = acc => ({value: acc.value + "9"});
const btc = acc => ({value: acc.value + "("});
const bto = acc => ({value: acc.value + ")"});
const btsl = acc => ({value: acc.value + "/"});
const btM = acc => ({value: acc.value + "*"});
const btmi = acc => ({value: acc.value +"-"});
const btplus = acc => ({value: acc.value + "+" });
const btdot = acc => ({value: acc.value + "."});
const bC = acc => ({value: acc.value = " "});
const bteq = acc => ({value: acc.value = eval(display.value)});


const button$ = Observable.merge(
	Observable.fromEvent(BT1, 'click').mapTo(bt1),
	Observable.fromEvent(BT2, 'click').mapTo(bt2),
	Observable.fromEvent(BT3, 'click').mapTo(bt3),
	Observable.fromEvent(BT4, 'click').mapTo(bt4),
	Observable.fromEvent(BT5, 'click').mapTo(bt5),
	Observable.fromEvent(BT6, 'click').mapTo(bt6),
	Observable.fromEvent(BT7, 'click').mapTo(bt7),
	Observable.fromEvent(BT8, 'click').mapTo(bt8),
	Observable.fromEvent(BT9, 'click').mapTo(bt9),
	Observable.fromEvent(BT0, 'click').mapTo(bt0),
	Observable.fromEvent(BTC, 'click').mapTo(bC),
	Observable.fromEvent(BTD, 'click').mapTo(btsl),
	Observable.fromEvent(BTX, 'click').mapTo(btM),
	Observable.fromEvent(BTPLUS, 'click').mapTo(btplus),
	Observable.fromEvent(BTDOT, 'click').mapTo(btdot),
	Observable.fromEvent(BTEQ, 'click').mapTo(bteq),
	Observable.fromEvent(BTMIN, 'click').mapTo(btmi)
)


button$
	.scan((acc, update) => update(acc),counter)
	.subscribe(counter => {
		display.value = counter.value;
	})

const Keys = Observable.fromEvent(document, 'keyup')
    .filter(function(e) {
		const charStr = e.key || e.which;
		if(charStr>0 && charStr<10) {
			return charStr;}
		switch (charStr){
			case '(':return charStr;
			case ')':return charStr;
			case '-':return charStr;
			case '+':return charStr;
			case '*':return charStr;
			case 'c':return charStr;
			case '.':return charStr;
			case '/':return charStr;
			case '=':return charStr;
		}


});

Keys.subscribe(function(e) {

	 if(e.key == '='){
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  }
  else if(e.key == 'c'){
    document.getElementById('display').value = '';
  }
  else  {
    document.getElementById('display').value += e.key;
  }

});
