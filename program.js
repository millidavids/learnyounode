function addArgs(array) {
    total = 0;
    for(var i = 0; i < array.length; i++) {
        total += +array[i];
    }
    return total;
}

console.log(addArgs(process.argv.slice(2, process.argv.length)));
