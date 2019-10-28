let PI = 3.14;

function sum(elements) {
    let total = 0;
    for(let i = 0; i< elements.length; i++) {
        total += elements[i];
    }
    console.log('Sum: ' + total);
}

module.exports.PI = PI;
module.exports.sum = sum;