const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

//Предмети студента

function getSubjects(student) {
  const subjects = Object.keys(student.subjects);
  const list = subjects.map(subj => subj.charAt(0).toUpperCase() + subj.slice(1).toLowerCase().replace('_', ' '));
  return list;
}

console.log(getSubjects(students[0]));

//Середня оцінка студента

function getAverageMark(student) {
  const allMarks = Object.values(student.subjects).flat();
  const sum = allMarks.reduce((sum, mark) => sum + mark, 0);
  const avMark = (sum / allMarks.length).toFixed(2);
  return avMark;
}

console.log(getAverageMark(students[1]));

//Загальна інфа про студента

function getStudentInfo(student) {
  const studentInfo = {};
  studentInfo.course = student.course;
  studentInfo.name = student.name;
  studentInfo.averageMark = getAverageMark(student);
  return studentInfo;
}

console.log(JSON.stringify(getStudentInfo(students[1])));

//Імена студентів в алфавітному порядку

function getStudentsNames(students) {
  let names = [];
  students.map(student => names.push(student.name));
  return names.sort();
}

console.log(getStudentsNames(students));

//Студент з кращою середньою оцінкою

function getBestStudent(students) {
  let bestStudent;
  let bestMark = 0;
  students.forEach(student => {
    if (getAverageMark(student) > bestMark) {
      bestMark = getAverageMark(student);
    }
    bestStudent = student.name;
  });
  return bestStudent;
}

console.log(getBestStudent(students));

//Ключі - букви, значення - кількість повернень букв

function calculateWordLetters(word) {
  const wordArr = word.split('');
  const wordObj = {};
  wordArr.forEach(letter => {
    wordObj[letter] = (wordObj[letter] || 0) + 1;
  })
  return wordObj;
}

console.log(calculateWordLetters('tatalula'));