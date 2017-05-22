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
        out += h;
        h = h.length;
        d = e = mod(d, f);
    }
    return out;
}
console.log(calculate(100));

function log(me) {document.getElementById("log").innerHTML += '<br />>>> '+me;}