Array.prototype.myMap = function(cb){
    let updatedArr = [];
    for(let i =0; i < this.length; i++){
        updatedArr.push(cb(this[i]));
    }
    return updatedArr;
}

console.log([1,2,3].myMap((i) => i * 5));
