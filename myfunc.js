function addNumbers(num1, num2) {
  return num1 + num2;
}

function myFunction() {
  document.getElementById("p1").innerHTML = "Hello World";

  let ww = document.getElementById("p2");

  // let dp = ww.getAttribute("data-op");

  //  alert("data-op = " + dp);

  var a = document.querySelectorAll("[data-op]");

  for (let i = 0; i < a.length; i++)
    // if (a.hasOwnProperty(i)) {
    alert(a[i].getAttribute("data-op"));
  // }
}
