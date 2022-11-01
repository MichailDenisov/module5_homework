// let map = new Map();
// map.set("1", "string")
// map.set(1, "number");
// map.set(true, "boolean");

// console.log(map.get(1));
// // number
// console.log(map.get("1"));
// // string
// alert(map.size);//кол-во эл-ов 3

let fruits = new Map([

    ["apple", "green"],
  
    ["strawberry", "red"],
  
    ["blueberry", "blue"]
  
  ]);
    for (let name of fruits.keys()) {
          console.log(name); // apple, strawberry, blueberry
        }

        for (let color of fruits.values()) {
              console.log(color); // green, red, blue
        }  
          
          for (const [key, value] of fruits) {
            console.log(`${key} = ${value}`);
          }