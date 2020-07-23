function sum(n1,n2) {
    return n1 + n2;
}

function cal(n1,n2, callback){
    return callback(n1,n2);
}

console.log(cal(6,2,sum));

function date(callback) {
    console.log('data');
    setTimeout(() => {
        let date = new Date;
        callback()
    }, 4000);
}

function printDate(){
    console.log('entra a print');
}

date(printDate);