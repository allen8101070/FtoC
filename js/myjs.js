function btn_onclick() {

  var f = new Number(fahrenheit.value);
  var c = new Number(centigrade.value);


  c = (f-32)*5/9;
  c = Math.round(c * 10) / 10 
  centigrade.value = c;


}

function btn2_onclick() {
  centigrade.value="";
  fahrenheit.value="";
}