function isItStrangeNum(num) {
    let sum = 0;
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            sum += i;
        }
    }
    return sum === num;
}


console.log(isItStrangeNum(6));
console.log(isItStrangeNum(8));
console.log(isItStrangeNum(28));