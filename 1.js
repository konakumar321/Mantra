

var obj =  [{'id':1, 'type': 'external'}, {'id':2}, {'id':3, type: 'internal'}];

const arr1 = obj.filter(d => d.type == "external");
console.log('arr1 is', arr1);
