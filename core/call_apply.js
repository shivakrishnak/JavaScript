var greet = function(name1 , name2){
    console.log(this + ' ' + name1 + ' and ' + name2 );
}

String.prototype.greet = greet;

//target object acts as this - implict object
'howdy'.greet('Jack', 'Jill');

//this parameter is implicit
//call function
greet.call('hello','Jack', 'Jill');

//apply function
greet.apply('Apply Hello', ['Jack', 'Jill']);