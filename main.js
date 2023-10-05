// Problem 1:

function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();
// nhờ cơ chế hoisting,
// JS tự động đưa phần khai báo a và khai báo function foo() lên đầu scope của nó.
// nên a nhận undefined
// foo() nhận giá trị là 2
// mặc dù tại thời điểm chạy console.log(a) và console.log(foo()) chúng chưa được khai báo.

// Problem 2

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(firstResult);
console.log(result);
// result = 5
// nhờ closuse, otherFunction có thể truy cập vào biến a trong someFunction ngay cả khi someFunction đã thực thi xong

// Problem 3

var a = 1;
function b() {
  // a = function(){} ______hoisting
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
// result = 1
// nhờ hoisting, phần khai báo function a được đưa lên đầu scope của nó
// phép gán a = 10 tức là gán lại biến a là function thành 10
// do đó không ảnh hưởng đến biến a bên ngoài function b

// Problem 4

var nodes = document.getElementsByTagName("button");

for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("click", function () {
    console.log("You clicked element #" + i);
  });
}
// do i khai báo bằng var có scope là global, hết for thì i cuối cùng bằng 4.
// nhờ closuse, i trong addEventListener nhận giá trị i bên ngoài (4)
// fix : thay var bằng let
// khi đó i có scope là block scope. Tại mỗi vòng lặp sẽ tạo 1 giá trị i khác.
// addEventListener nhận các giá trị i tăng dần tương ứng ở mỗi vòng for
