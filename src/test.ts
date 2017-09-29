class Value {
    value: any;

    constructor(value: any) {
        this.value = value;
    }

    filter(prefix: string): Value {
        if (typeof this.value === "object") {
            var r: any = {}
            for (var x in this.value) {
                if (x.startsWith(prefix)) {
                    var y = x.substring(prefix.length);
                    r[y] = this.value[x];
                }
            }
            return new Value(r);
        }
        else {
            return new Value(null);
        }
    }
};

function test(something: any) {
    return something.filter("he");
}

var a = new Value({ hello: 12 });
console.log(a);
console.log(test(a));

var b = new Value(["one", "two", "three", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(b.filter("1"));

class OpNode {
    value: any;

    filter(prefix: string) {
        return new Filter(this, prefix);
    }
}

class Filter extends OpNode {
    parent: OpNode;
    prefix: string;

    constructor(parent: OpNode, prefix: string) {
        super();
        this.parent = parent;
        this.prefix = prefix;
    }
}
