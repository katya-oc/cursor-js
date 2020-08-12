class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this._marks = [];
    this._learning = true;
  }

  getInfo() {
    return `Студент(ка) ${this.course}-го курсу університуту ${this.university} ${this.fullName}`;
  }

  get studentMarks() {
    if (this._learning) return this._marks
    else return null;
  }

  set studentMarks(mark) {
    if (this._learning) return this._marks.push(mark)
  }

  getAverageMark() {
    return this._marks.reduce((sum, mark) => sum + mark, 0) / this._marks.length;
  }

  dismiss() {
    this._learning = false;
  }

  recover() {
    this._learning = true;
  }
}

const student = new Student('КНЕУ', '4', 'Антоніна Василенко');
const marksArr = [5, 4, 4, 5];
student._marks = marksArr;


console.log(student);
console.log(student.getInfo());
console.log('Оцінки студента:', student.studentMarks);
student.studentMarks = 5;
console.log('Оцінки студента:', student.studentMarks);
console.log('Середній бал:', student.getAverageMark());
student.dismiss();
console.log('о ні, студента виключили, його оцінки', student.studentMarks);
student.recover();
console.log('студента поновили, його оцінки:', student.studentMarks);

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
    setTimeout(this.getScolarship, 10000);
  }

  getScolarship() {
    if (this._learning && this.getAverageMark() >= 4) {
      return console.log('Ви отримали 1400 грн стипендії.')
    } else {
      return console.log('Ти на щось розраховував? Старайся краще! А поки стипендії нема:(');
    }
  }
}

const budgetStudent = new BudgetStudent('КПІ', '2', 'Сергій Кочурба');
const marksArr2 = [2, 4, 5, 3];
budgetStudent._marks = marksArr2;
console.log(budgetStudent);
console.log('Оцінки студента:', budgetStudent.studentMarks);
console.log('Середній бал:', budgetStudent.getAverageMark());