function Type() {
}

function Node(type) {
    this.type = type;
};

function get_prop(obj, name) {}

function set_prop(obj, name) {}

function filter(obj, prefix) {}

function zip_objs(obj1, obj2) {}

function foreach(obj, fun) {}

function transform1(obj1, obj2) {
    var text = new Var();

    var dag1 = property(obj1, "text", text);
    var dag2 = property(obj2, "text", text);

    return dag1.combine(dag2.reverse());
}

function make_sel(pair) {
    var obj = set_prop(empty(), "start", get_prop(pair, 0));
    return set_prop(obj, "end", get_prop(pair, 1));
}

function transform2(obj1, obj2) {
    return set_prop(obj1, "text", get_prop(obj2, "text"));
    var curs = filter(get_prop(obj, "cursors"), "c");
    var selections = map_obj(zip_objs(filter(get_prop(obj, "cursors"), "s"),
        filter(get_prop(obj, "cursors"), "e")), make_sel);

    var curs = obj.get("cursors").filter("c");
    var sels = obj.get("cursors").filter()
}

function get_selections(cursors_obj) {
    var dag = new Dag();
    dag.pipe(copy_prop('text'));
}

function selection_state(obj1, obj2) {
    return equal(prop(obj1, 'text'), prop(obj2, 'text'));
}