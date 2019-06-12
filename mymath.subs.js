const subs = (...args) => {
    const max = Math.max(...args);
    return args.reduce((total, currVal, i, array) => {
        return (array[i] != max) ? (total - currVal) : total;
    }, max);
};

export default subs;