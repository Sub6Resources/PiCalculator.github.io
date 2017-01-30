//INTENTIONALLY OBFUSCATED CODE
//ALL RIGHTS RESERVED
//DO NOT COPY OR REDISTRIBUTE
//WITHOUT WRITTEN CONSENT OF MATTHEW WHITAKER
//AND SUB 6 RESOURCES
//LICENSE.md may give more details
function c(n,a) {return (((4*s1(n,a))-(2*s2(n,a))-(s3(n,a))-(s4(n,a)))%1)*16;}
function s1(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    k1+=(Math.pow(16,n-k)%((8*k)+1)/(8*k)+1);
  }
  for(var k=(n+1);k<=(n+1+a);k++) {
    //TODO start
    k2+=((Math.pow(16,n-k))/((8*k)+1));
  }
  k1=h(k1);k2=h(k2);
  l("s1: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s2(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    k1+=(Math.pow(16,n-k)%((8*k)+4)/(8*k)+4);
  }
  for(var k=(n+1);k<=(n+1+a);k++) {
    //TODO start
    k2+=((Math.pow(16,n-k))/((8*k)+4));
  }
  k1=h(k1);k2=h(k2);
  l("s2: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s3(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    k1+=(Math.pow(16,n-k)%((8*k)+5)/(8*k)+5);
  }
  for(var k=(n+1);k<=(n+1+a);k++) {
    //TODO start
    k2+=((Math.pow(16,n-k))/((8*k)+5));
  }
  k1=h(k1);k2=h(k2);
  l("s3: k1="+k1+" k2="+k2);
  return k1+k2;
}
function s4(n,a) {
  var k1,k2;
  k1=0;
  k2=0;
  for(var k=0;k<=n;k++) {
    k1+=(Math.pow(16,n-k)%((8*k)+6)/(8*k)+6);
  }
  for(var k=(n+1);k<=(n+1+a);k++) {
    //TODO start
    k2+=((Math.pow(16,n-k))/((8*k)+6));
  }
  k1=h(k1);k2=h(k2);
  l("s4: k1="+k1+" k2="+k2);
  return k1+k2;
}
function h(nu) {var hS = nu.toString(16); return parseInt(hS, 16);}
function l(me) {document.getElementById("log").innerHTML += '<br />>>> '+me;}
