var obj = { first: 'someVal', second: 'otherVal' };
alert(Object.keys(obj)[0]); // returns first
alert(Object.keys(obj)[1]); // returns second





const OBJECT = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
    'key4': 'value4'
};

const value = 'value2';

const key = Object.keys(OBJECT)[Object.values(OBJECT).indexOf(value)];

window.console.log(key); // = key2






var obj = { 'bar' : 'baz' }
var key = Object.keys(obj)[0];
var value = obj[key];

 console.log("key = ", key) // bar
 console.log("value = ", value) // baz




 
