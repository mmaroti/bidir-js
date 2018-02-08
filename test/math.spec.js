describe('math', function() {
    const Numeric = require('../dist/variable').Numeric;
    const assert = require('assert');
    let a, b;

    beforeEach(() => {
        a = new Numeric(10);
        b = new Numeric(20);
    });

    // This brings us to an important question. How can we do "partial inverses"?
    it('should be able to invert mult', function() {
        // Currently I am treating the second input as a constant...
        let p = a.mult(b);

        assert.equal(p.value, 200);

        p.value *= 10;  // Manually update the value for 'p'

        p.backward();  // compute the inverses
        assert.equal(a.value, 100);
    });

    it('should be able to invert add', function() {
        let s = a.add(b);

        s.value *= 10;
        s.backward();
        assert.equal(a.value, 280);
    });
});
