const deleteDublicate = (arr) => {
    return [...new Set(arr)];
}

console.log(deleteDublicate(['i', 'love', 'love', 'pizza', 'pizza', 'pizza']));