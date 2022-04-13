const reactive = data => {
    if (!data || typeof data !== 'object') return data;
    for(const key in data) data[key] = reactive(data[key]);
    return new Proxy(data, {
        get(target, key) {
            return target[key];
        },
        set(target, key, value) {
            FlexJS.watch(key, () =>  {});
            target[key] = reactive(value);
            return true;
        }
    });
};

FlexJS.cenas = () => console.log(watchers)

FlexJS.foo = reactive({
    bar: 34
})


