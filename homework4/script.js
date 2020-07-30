const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
  const pairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]]
  ];
  return pairs;
}

const pairs = getPairs(students);

console.log(pairs);

function getThemes(pairs, themes) {
  const studentThemes = [];
  for (i = 0; i < pairs.length; i++) {
    studentThemes.push([pairs[i].join(' та '), themes[i]]);
  }
  return studentThemes;
}

const studentThemes = getThemes(pairs, themes);

console.log(studentThemes);

function getMarks(students, marks) {
  const studentMark = [];
  for (i = 0; i < students.length; i++) {
    studentMark.push([students[i], marks[i]]);
  }
  return studentMark;
}

console.log(getMarks(students, marks));

function randomMark() {
  return Math.floor(Math.random() * 5) + 1;
}


function getRandomMark() {
  const studentRandomMark = [];
  for (i = 0; i < pairs.length; i++) {
    studentRandomMark.push([pairs[i].join(' та '), themes[i], randomMark()]);
  }
  return studentRandomMark;
}

console.log(getRandomMark());