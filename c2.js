//Initialization
//self.importScripts("bignumber.js");
var NDIGITSi = 55000;
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
//Call the function
calcpi(NDIGITSi, outi, ai, bi, ci, di, ei, fi, gi, hi);
function calcpi(NDIGITS, out, a, b, c, d, e, f, g, h) {
    log("Calculating "+NDIGITS+" digits of pi...<br />");
    var LEN = (NDIGITS / 4 + 1) * 14;
    c = LEN;
    f = 10000;
    for (; a.length !== LEN; a.push(0));
    for (; (b = c -= 14) > 0;) {
        for (; --b > 0;) {
            d *= b;
            if (h === 0) {
                d += 2000 * f;
            } else {
                d += a[b] * f;
            }
            g = b + b - 1;
            a[b] = mod(d, g);
            d = Math.floor(d / g);
        }
        h = Math.floor(e + d / f);
        temph = h+"";
        var temphLength = temph.length;
        if(temphLength == 1) {
          temph = "000"+temph;
        }
        else if(temphLength == 2) {
          temph = "00"+temph;
        }
        else if(temphLength == 3) {
          temph = "0"+temph;
        }
        else if(temphLength == 5) {
            //Probably a 10000, add one to digit before, and put last four digits into this set.
            var lastNumber = out.slice(-1);
            out = out.slice(0, -1);
            var numToRepl = (((lastNumber*1) + (temph.charAt(0)*1)))+"";
            //Remove in production
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
        h = h.length;
        d = e = mod(d, f);
    }
    log("DONE! Calculated "+out.length+" digits of pi!");
}
function add(me) {postMessage(me);}
function replacePrev(newNum) {postMessage("REPL:"+newNum);}
function log(me) {postMessage('<br />&gt;&gt;&gt; '+me);}
function mod(m, n) {
        return ((m % n) + n) % n;
} // mod function to fix javascript modulo bug
