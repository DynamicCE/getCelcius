function toFah() {
  let cel = parseFloat(document.getElementById("inputC").value);
  let fah = (cel * 9) / 5 + 32;
  console.log(fah);
  document.getElementById("display").innerText = fah +" fahrenheit ";
}

function toCel() {
   fah = parseFloat(document.getElementById("inputF").value);
   cel = (fah - 32)*5/9;
  document.getElementById("display").innerText = cel +" celcius";
}
