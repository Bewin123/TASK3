function areEqual(obj1, obj2) {
  // Convert JSON objects to strings
  const str1 = JSON.stringify(obj1);
  const str2 = JSON.stringify(obj2);

  // Parse the strings back into JavaScript objects
  const parsedObj1 = JSON.parse(str1);
  const parsedObj2 = JSON.parse(str2);

  // Compare the resulting objects
  return deepEqual(parsedObj1, parsedObj2);
}

// Deep equality check for objects
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example usage
const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

const result = areEqual(obj1, obj2);
console.log(result); // Output: true
