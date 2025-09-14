// task_4/js/Subject.ts
/// <reference path="./Teacher.ts" />

// prettier-ignore
namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher:Teacher) {
      this.teacher = teacher;
    }
  }
}