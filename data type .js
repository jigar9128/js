// NN SS BB U = NULL,NUMBER,SYMBOL,STRING,BOOLEAN,BIGINT,UNDEFINED
{
  let a = null;
  let b = 345; //
  let c = true; //can also be false
  let d = BigInt("557") + BigInt("57");
  let e = "Jigar";
  let f = Symbol("I am a nice symbol");
  console.log(a, b, c, d, e, f);
}

//object or non premitiv data type in js

const item = {
  jigar: true,
  shubh: false,
  nitya: 89,
  jenil: undefined,
};
console.log(item["nitya"]);
console.log(typeof item);
