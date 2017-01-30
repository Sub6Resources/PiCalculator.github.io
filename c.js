//INTENTIONALLY OBFUSCATED CODE
//ALL RIGHTS RESERVED
//DO NOT COPY OR REDISTRIBUTE
//WITHOUT WRITTEN CONSENT OF MATTHEW WHITAKER
//AND SUB 6 RESOURCES
//LICENSE.md may give more details
function c(n,a) {
  var z = (((4*(s1(n,a)))-(2*(s2(n,a)))-((s3(n,a)))-((s4(n,a)))));
  var y = Math.floor(z);
  var x = z - y;
  return h(x*16);
}
function s1(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    var f=(Math.pow(16,n-k)%(8*k+1))/(8*k+1);
    k1+=f;
  }
  for(var i=(n+1);i<=(n+1+a);i++) {
    //TODO start
    k2+=((Math.pow(16,n-i))/((8*i)+1));
  }
  k1=h(k1);
  k2=h(k2);
  l("s1: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s2(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
   var f=(Math.pow(16,n-k)%(8*k+4))/(8*k+4);
    k1+=f;
  }
  for(var i=(n+1);i<=(n+1+a);i++) {
    //TODO start
    k2+=((Math.pow(16,n-i))/((8*i)+4));
  }
  k1=h(k1);
  k2=h(k2);
  l("s2: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s3(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    var f=(Math.pow(16,n-k)%(8*k+5))/(8*k+5);
    k1+=f;
  }
  for(var i=(n+1);i<=(n+1+a);i++) {
    //TODO start
    k2+=((Math.pow(16,n-i))/((8*i)+5));
  }
  k1=h(k1);
  k2=h(k2);
  l("s3: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s4(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    var f=(Math.pow(16,n-k)%(8*k+6))/(8*k+6);
    k1+=f;
  }
  for(var i=(n+1);i<=(n+1+a);i++) {
    //TODO start
    k2+=((Math.pow(16,n-i))/((8*i)+6));
  }
  k1=h(k1);
  k2=h(k2);
  l("s4: k1="+k1+" k2="+k2);
  return k1+k2;
}
function h(nu) {
  var hS = nu.toString(16);
  l("HexString: "+hS);
  var i = parseFloat(hS, 16);
  //l("After parsing: "+i);
  return i;
}
function parseFloat(string, radix)
{
    //split the string at the decimal point
    string = string.split(/\./);

    //if there is nothing before the decimal point, make it 0
    if (string[0] == '') {
        string[0] = "0";
    }

    //if there was a decimal point & something after it
    if (string.length > 1 && string[1] != '') {
        var fractionLength = string[1].length;
        string[1] = parseInt(string[1], radix);
        string[1] *= Math.pow(radix, -fractionLength);
        return parseInt(string[0], radix) + string[1];
    }

    //if there wasn't a decimal point or there was but nothing was after it
    return parseInt(string[0], radix);
}
function l(me) {document.getElementById("log").innerHTML += '<br />>>> '+me;}
