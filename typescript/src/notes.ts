//TypeScript is a superset of JavaScript that adds static typing and other powerful features to help developers write more robust and maintainable code.

//why typescript is required compilation?
  //ypeScript requires compilation because it introduces features that are not directly supported by JavaScript engines (browsers or Node.js).
  //The TypeScript compiler (tsc) removes the type information since JavaScript engines don't understand it.
  //e.g: let age: number = 25;  // TypeScript code
   //compiles to...
    //let age = 25;  // JavaScript code (no types)

//why ts called not true static typed language?
 //TypeScript is sometimes called a "not-true" statically typed language or gradually-typed language because its type system is not as strict as in fully statically-typed languages like Java, C++, or Haskell. 
 //You can write TypeScript without explicitly defining types for every variable. If a type isn't declared, TypeScript infers the type based on the initial assignment.
 //e.g: let name = "Alice";  // TypeScript infers the type as string
  //name = 123;          // Error: Type 'number' is not assignable to type 'string'