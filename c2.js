self.importScripts("bignumber.js");
var NDIGITSi = 100000;
    var LENi = (NDIGITSi / 4 + 1) * 14,
        outi = "",
        ai = [],
        bi = 0,
        ci = LENi,
        di = 0,
        ei = 0,
        fi = 10000,
        gi = 0,
        hi = 0,
        temph = "";
var it = 1;
log("Starting...");
calcpi(NDIGITSi, outi, ai, bi, ci, di, ei, fi, gi, hi);
function calcpi(NDIGITS, out, a, b, c, d, e, f, g, h) {
    var LEN = (NDIGITS / 4 + 1) * 14;
    c = LEN;
    f = 10000;
    log("Calculating "+NDIGITS+" digits of pi...<br />");
    for (; a.length !== LEN; a.push(0));
    //console.log("A: "+a);
    for (; (b = c -= 14) > 0;) {
        //console.log("B: "+b);
        //console.log("C: "+c);
        for (; --b > 0;) {
            //console.log("B(LOOP): "+b);
            d *= b;
            //console.log("D: "+d);
            if (h === 0) {
                d += 2000 * f;
                //console.log("D(H === 0): "+d);
            } else {
                d += a[b] * f;
                //console.log("D(H !== 0): "+d);
            }
            g = b + b - 1;
            //console.log("G: "+g);
            a[b] = mod(d, g);
            //console.log("A[B]: "+a[b]);
            d = Math.floor(d / g);
            //console.log("D(floor): "+d); 
        }
        h = Math.floor(e + d / f);
        //console.log("H: "+h);
        temph = h+"";
        if(temph.length == 1) {
          temph = "000"+temph;
        }
        else if(temph.length == 2) {
          temph = "00"+temph;
        }
        else if(temph.length == 3) {
          temph = "0"+temph;
        }
        if(temph.length == 5) {
            //Probably a 10000, add one to digit before, and put last four digits into this set.
            var lastNumber = out.slice(-1);
            out = out.slice(0, -1);
            var numToRepl = (((lastNumber*1) + (temph.charAt(0)*1)))+"";
            replacePrev(numToRepl); //Send message to page telling to replace number before.
            out += numToRepl;
            temph = temph.substring(1, temph.length);
        }
        out += temph;
        add(temph+"");
        if(out.length % 100 == 0) {
            //remove in production
            log(it+"00 digits: ");
            it++;
        }
        //console.log("OUT: "+out);
        h = h.length;
        //console.log("H.LENGTH: "+h);
        d = e = mod(d, f);
        //console.log("D(end): "+d);
        //console.log("E(end): "+e);
    }
    //console.log("OUT COMING: "+out);
    log("DONE");
    //calcpi(NDIGITS+1000, out, a, b, c,d,e,f,g,h);
//log("RESULT: "+out);
}
function add(me) {postMessage(me);}
function replacePrev(newNum) {postMessage("REPL:"+newNum);}
function log(me) {postMessage('<br />&gt;&gt;&gt; '+me);}
function mod(m, n) {
        return ((m % n) + n) % n;
} // mod function to fix javascript modulo bug
