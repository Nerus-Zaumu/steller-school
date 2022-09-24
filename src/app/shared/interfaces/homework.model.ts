export interface Homework {
  iconName: string;
  assignmentDescription: string;
  course: string;
}


export interface HomeworkData {
  date: string;
  payload: Array<Homework>;
}
