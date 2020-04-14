### JavaScript
- JavaScript objects are JSON Object - a collection of key/value pair

> 'use strict' - It emphasis javascript to put var in defining varible which otherwise creates global variables.



#### Definitions	
- Hoisting
	-	variable is defined at the very top of the code. It doesnt matter where you defined a variable/function name, it is hoisted to the top.
	- 	once the variable/function name is hoisted, it may shadow or re write the implementation.

##### Writing Function

- Below code will lead to hoisting problems - which will be defined at top.
function foo(n){
    console.log("foo called with " + n)
}

- Below code is the better option which will avoid hoisting. Here we create a variable and assign an anonymous function
var foo = function(n){
    console.log("foo is called with " + n);
}

##### 