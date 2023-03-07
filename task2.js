const getCapitalizedWord = (str) => {
    return str.split(' ').map(word => `${word.charAt(0).toUpperCase()}${word.substring(1)}`).join(' ');
}

console.log(getCapitalizedWord('i love pizza'));