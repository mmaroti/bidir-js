class OpNode {
    value: any;

    filter(prefix: string) {
        return new Filter(this, prefix);
    }
}

class Filter extends Node {
    parent: OpNode;
    prefix: string;

    constructor(parent: OpNode, prefix: string) {
        super();
        this.parent = parent;
        this.prefix = prefix;
    }
}
