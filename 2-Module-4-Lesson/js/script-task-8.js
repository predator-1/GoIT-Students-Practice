//Courses work interface and rise error

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCourse = name => {
  if (courses.includes(name)) {
    console.log(`${name} exists`);
    return;
  }
  courses.push(name);
  console.log(courses);
};

const removeCourse = name => {
  updateCourse(name, null);
};

const updateCourse = (name, newName) => {
  const nameIndex = courses.indexOf(name);
  if (nameIndex < 0) {
    console.log(`${name} does not exists`);
    return;
  }
  newName !== null
    ? courses.splice(nameIndex, 1, newName)
    : courses.splice(nameIndex, 1);
  console.log(courses);
};

// addCourse('Express');
// addCourse('CSS');
removeCourse('React');
// removeCourse('Vue');
// updateCourse('Express', 'NestJS');
