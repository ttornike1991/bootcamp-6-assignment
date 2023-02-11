const experiences = {};
   
// loop through localStorage to extract properties
for (let i = 0; i < localStorage.length; i++) {
const key = localStorage.key(i);
if (key.startsWith("position")) {
  const index = key.substring("position".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].position = localStorage.getItem(`position${index}`);
} else if (key.startsWith("employee")) {
  const index = key.substring("employer".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].employer = localStorage.getItem(`employee${index}`);
} else if (key.startsWith("startData")) {
  const index = key.substring("startData".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].start_date = localStorage.getItem(`startData${index}`);
} else if (key.startsWith("endData")) {
  const index = key.substring("endData".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].due_date = localStorage.getItem(`endData${index}`);
} else if (key.startsWith("description")) {
  const index = key.substring("description".length);
  // create a new object for the experience if it doesn't exist yet
  if (!experiences[index]) {
    experiences[index] = {};
  }
  // add the properties to the experience object
  experiences[index].description = localStorage.getItem(`description${index}`);
}
 

}

// log the generated experiences
console.log(experiences);