var person = {
    firstName: 'Shiva',  //property
    lastName: 'Krishna', //property
    age: 25,
    play: function(toy){    //function
        console.log('Playing with ' + toy);
    }

};

console.log(person);

//accessing properties
console.log(' 1 way : ' + person.firstName);
console.log(' 2 way : ' + person['firstName']);

var fName = 'firstName';
console.log(' 3 way : ' + person[fName]);

//check if property exists
var fullName = 'fullName';
console.log('Check if person has fullName property '+ person.hasOwnProperty(fullName));
console.log('Check if person has firstName property '+ person.hasOwnProperty(fName));

//accessing function
person.play('Pikachu')

//modifing properties
person.age = 20;
console.log(person.age)

//compare and update data from another object
var properties = {
    firstName : 'Ram',
    lastName: 'Sita'
};

console.log('Before ------ ');
console.log(person);
for(var prop in properties){
    person[prop] = properties[prop];
}
console.log('After ------- ');
console.log(person);

console.log('Property ------- Value');
for(var property in person){
    if(typeof(person[property]) !== 'function')
        console.log(property+' ------- ' + person[property]);

}