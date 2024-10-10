// Setting the Variable for the Company Name
// const: the value cannot be reassigned
const companyName = "Scuber";

// Setting the variable for the Most Proficatble Neighborhood
// let: the value can be reassigned and is block-scoped
let mostProfitableNeighborhood = "Chelsea";

// Setting the variable for the Companies CEO (Chief Executive Officer)
// let: the value can be reassigned and is block-scoped
let companyCeo = "Susan Smith"

/*
 Differences between let, const, and var:
 
 1. const:
    - Non-reassignable: Once declared, the value cannot be changed.
    - Block-scoped: Accessible only within the block it's declared in.
    - Example: 
      const companyName = 'Scuber'; 
      companyName = 'New Name'; // Error: Assignment to constant variable.
  
 2. let:
    - Reassignable: Can be reassigned a new value after initial declaration.
    - Block-scoped: Only accessible within the block in which it's declared.
    - Example:
      let age = 25;
      age = 26; // Allowed
  
 3. var:
    - Function-scoped: Accessible throughout the entire function, even outside block scopes.
    - Hoisting: Declared at the top of the function but initialized as undefined.
    - Reassignable and re-declarable: Can be reassigned and re-declared within the same scope.
    - Example:
      var x = 10;
      var x = 20; // Allowed
*/