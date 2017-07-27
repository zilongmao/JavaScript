;/**
 * Created by Administrator on 2017/7/10.
 */
//通过JS打印Document属性
document.write("<h1>Js输出标题</h1>");
console.log("是否输出")

var xx = document.getElementById("demo");


function add() {
    console.log("a")
}
function test() {
    
}

var i = 100e15+500;
var j = 1234e-1;
var arr = [];
arr[1] = 15;
arr[2] = 20;
arr[3] = 25;
//arr[0] = 30;
//alert(typeof arr[0])

var Person={
    name : "Dapao Liu",
    age : 66,
    sex : "man"
}
//alert(Person.name);
alert("Person的age为：" + Person["age"])
