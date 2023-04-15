//learning goals
// adding an object property using dot or 
/// bracket notation
// modify a  property using dot or bracket notation
// update an object nondestructively using the spread operator
// remove a property from an object
// identify the relationship btn  array and objects


const circle = {};
//creating an empty object and assigning it a value using dot notation

circle.raduis = 5;


circle['diameter'] = "10"

//assiging a diameter to object circle  using  bracket notation



console.log(circle.circumference = circle.diameter * Math.PI);
//accessing circle circumference and assigning its  method that would be used to calculate the circumference

circle["area"] = Math.PI * circle.raduis ** 2;


console.log(circle);