function mod(m, n) {
        return ((m % n) + n) % n;
} // mod function to fix javascript modulo bug

function calculate(NDIGITS) {
    var LEN = (NDIGITS / 4 + 1) * 14,
        out = "",
        a = [],
        b = 0,
        c = LEN,
        d = 0,
        e = 0,
        f = 10000,
        g = 0,
        h = 0;

    for (; a.length !== LEN; a.push(0));
    log("A: "+a);
    for (; (b = c -= 14) > 0;) {
        log("B: "+b);
        log("C: "+c);
        for (; --b > 0;) {
            log("B(LOOP): "+b);
            d *= b;
            log("D: "+d);
            if (h === 0) {
                d += 2000 * f;
                log("D(H === 0): "+d);
            } else {
                d += a[b] * f;
                log("D(H !== 0): "+d);
            }
            g = b + b - 1;
            log("G: "+g);
            a[b] = mod(d, g);
            log("A[B]: "+a[b]);
            d = Math.floor(d / g);
            log("D(floor): "+d); 
        }
        h = Math.floor(e + d / f);
        log("H: "+h);
        out += h;
        log("OUT: "+out);
        h = h.length;
        log("H.LENGTH: "+h);
        d = e = mod(d, f);
        log("D(end): "+d);
        log("E(end): "+e);
    }
    log("OUT COMING: "+out);
    return out;
}

function log(me) {document.getElementById("log").innerHTML += '<br />>>> '+me;}
