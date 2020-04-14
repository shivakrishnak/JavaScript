var foo = function(){
    var max = 100;
    console.log(max);
}

var foo2 = function(){
    max2 = 200;
    console.log(max2);
}

foo2();
console.log(max2);

foo();
console.log(max);