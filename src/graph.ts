interface Link {
    getInput(): any;
    getOutput(): any;
    setInput(input: any): void;
    setOutput(output: any): void;
};

class Inverse implements Link {
    link: Link;

    constructor(link: Link) {
        this.link = link;
    }

    getInput() {
        return this.link.getOutput();
    }

    getOutput() {
        return this.link.getInput();
    }

    setInput(input: any) {
        this.link.setOutput(input);
    }

    setOutput(output: any) {
        this.link.setInput(output);
    }
};

class Compose implements Link {
    link1: Link;
    link2: Link;

    constructor(link1: Link, link2: Link) {
        // temporarily commented out as 'assert' isn't defined
        //assert(link1.getOutput() === link2.getInput());

        this.link1 = link1;
        this.link2 = link2;
    }

    getInput() {
        return this.link1.getInput();
    }

    getOutput() {
        return this.link2.getOutput();
    }

    setInput(input: any) {
        this.link1.setInput(input);
        this.link2.setInput(this.link1.getOutput());
    }

    setOutput(output: any) {
        this.link2.setOutput(output);
        this.link1.setOutput(this.link2.getInput());
    }
};
