function areEqual(obj1, obj2) {
  const sortedStr1 = JSON.stringify(obj1, Object.keys(obj1).sort());
  const sortedStr2 = JSON.stringify(obj2, Object.keys(obj2).sort());

  return sortedStr1 === sortedStr2;
}


const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

const result = areEqual(obj1, obj2);
console.log(result);
