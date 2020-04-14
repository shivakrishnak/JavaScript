//Writing Functions

//-------------------popular way of writing funtions
// foo(9)


// function foo(n){
//     console.log("foo called with " + n)
// }

// foo(6);

// function foo(n){
//     console.log("foo called redefined...")
// }

// foo(8)

//Above approach hoist the foo function to the top and will lead to inconsistent code
//-----------------Good approach to avoid hoisting - we can 
var foo = function(n){
    console.log("foo is called with " + n);
}

foo(4);

var foo = function(n){
    console.log("foo is redefined ");
}

foo(7);