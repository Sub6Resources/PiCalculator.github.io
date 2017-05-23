var logDiv = document.getElementById("log");
function mod(m, n) {
        return ((m % n) + n) % n;
} // mod function to fix javascript modulo bug

function calculate(NDIGITS) {
    window.status="";
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
    console.log("A: "+a);
    for (; (b = c -= 14) > 0;) {
        console.log("B: "+b);
        console.log("C: "+c);
        for (; --b > 0;) {
            console.log("B(LOOP): "+b);
            d *= b;
            console.log("D: "+d);
            if (h === 0) {
                d += 2000 * f;
                console.log("D(H === 0): "+d);
            } else {
                d += a[b] * f;
                console.log("D(H !== 0): "+d);
            }
            g = b + b - 1;
            console.log("G: "+g);
            a[b] = mod(d, g);
            console.log("A[B]: "+a[b]);
            d = Math.floor(d / g);
            console.log("D(floor): "+d); 
        }
        h = Math.floor(e + d / f);
        console.log("H: "+h);
        out += h;
        window.status += h;
        console.log("OUT: "+out);
        h = h.length;
        console.log("H.LENGTH: "+h);
        d = e = mod(d, f);
        console.log("D(end): "+d);
        console.log("E(end): "+e);
    }
    console.log("OUT COMING: "+out);
    return out;
}
function add(me) {logDiv.innerHTML += me;}
function log(me) {document.getElementById("log").innerHTML += '<br />>>> '+me;}
