let PI = 3.14;

function sum(elements) {
    let total = 0;
    for(let i = 0; i< elements.length; i++) {
        total += elements[i];
    }
    console.log('Sum: ' + total);
}

function max(elements) {
    let el = elements[0];
    for(let i = 1; i < elements.length; i++) {
        if(elements[i] > el) {
            el = elements[i];
        }
    }
    console.log('Max: ' + el);
}

module.exports.PI = PI;
module.exports.sum = sum;
module.exports.findMax = max;