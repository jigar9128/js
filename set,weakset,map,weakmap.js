//set
//map,weakmap,set,weakset
//it contain only uniqe value

let mynumber = [2, 3];
let obj = new Set(mynumber);
obj.add(6);
obj.add(5); //for add value
obj.delete(5); //for delete value
console.log(obj);

let obj1 = { name: "jigar" };

console.log(obj1);
console.log(obj.has(2)); //has is use for chek the given number is present of not (is value is present then output is true other wise false)
console.log(obj.has(10));
//

for (new1 of obj) {
  console.log(new1);
}

// map

let myMap = new Map([
  ["a1", "jigar"],
  ["a2", "nitya"],
]);
myMap.set("a2", "jigar");
console.log(myMap.get("a2"));
for (let [key, value] of myMap) {
  console.log(`keys ${key},value ${value}`);
}

//weakset

let ws = new WeakSet();
var obj2 = { name: "Tiger" };
var obj3 = {};
ws.add(obj2);
ws.add(obj3);
ws.delete(obj2);
console.log(ws.has(obj3));
console.log(ws);

//weakmap

let wm = new WeakMap();
var obj4 = { name: "jigar" };
var obj5 = {};
wm.set(obj4, "private");
wm.set(obj5, "private data");
console.log(wm);
console.log(wm.has(obj3));
