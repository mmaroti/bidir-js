class Transform {
    inputs: Variable[];
    output: Variable;

    backward() {
        // Update the input values based on the operation
        // TODO
    }
}

export class Add extends Transform {
    constructor(a: Numeric, b: Numeric) {
        super();
        this.inputs = [a, b];
    }

    forward() {
        let sum = new Numeric(this.inputs.reduce((a, b) => a.value + b.value));
        sum.setOrigin(this);

        this.output = sum;

        return sum;
    }

    backward() {
        this.inputs[0].value = this.output.value - this.inputs[1].value;
    }
}

class Multiply extends Transform {
    constructor(a: Numeric, b: Numeric) {
        super();
        this.inputs = [a, b];
    }

    forward() {
        let [a, b] = this.inputs;
        let sum = new Numeric(a.value * b.value);
        sum.setOrigin(this);

        this.output = sum;

        return sum;
    }

    backward() {
        this.inputs[0].value = this.output.value / this.inputs[1].value;
    }
}

class Variable {
    public value: any;
    origin: Transform;

    constructor(value: any) {
        this.value = value;
        this.origin = null;
    }

    // Compute all the backward values
    backward() {
        if (this.origin) {
            this.origin.backward();
        }
    }

    setOrigin(origin: Transform) {
        this.origin = origin;
    }
}

export class Numeric extends Variable {
    add(num: Numeric) {
        const add = new Add(this, num);
        return add.forward();
    }

    mult(num: Numeric) {
        const mult = new Multiply(this, num);
        return mult.forward();
    }

    /*
    add(num: Number) {
        return this.add(new Numeric(num));
    }
    */
}
