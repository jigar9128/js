//Problem statment

//--------------------------------Call------------------------------//

let userDetail = {
  name: "jigar",
  Age: 16,
  Designation: "Student",
  printDetail: function (state, country) {
    console.log(this.name + " " + state + " " + country);
  },
};
userDetail.printDetail("gujrat", "india");

let userDetail2 = {
  name: "Nitya",
  Age: 16,
  Designation: "Student",
};
userDetail.printDetail.call(userDetail2, "gujrat", "india");
//jo function object ni bar hoy to aana mate direct te fn nu name.call(object name)
//'Call' thi aapde bija koi function(je aapda program ma lakhelo hoy te) na call karavi sakiye chiye aapda program ma

//-------------------------------Apply-------------------------------//

//Apply ma aapde individual value nai ne ek array ma badhi sathe nakhi sakay
//diff between call & Apply = call :- individual value mukvi pade che
//                            Apply :- ek array ma badhi sathe mukiye sakay
userDetail.printDetail.apply(userDetail2, ["gujrat", "india"]);

//--------------------------------Bind-------------------------------//

//Bind thi :- we can creat copy of our fn and we can invoke leter
//aapde bind na use thi function ni copy banavi na aane fn nej direct call karvi sakiye chiye
let newfun = {
  name: "jenil",
  Age: 16,
  Designation: "Student",
  printDetail: function (state, country) {
    console.log(this.name + " " + state + " " + country);
  },
};
newfun.printDetail.bind("gujrat", "india");
console.log(newfun);
