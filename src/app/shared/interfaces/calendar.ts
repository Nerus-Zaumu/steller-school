export interface Data{
  month: string;
  presentCount: number;
  absentCount: number;
  leaveCount: number;
}

export interface AttendanceData{
  year: number;
  months: Data[];
}


const data = [
  {
    year: 2020,
    months: [
      {january: [10, 5, 5]},
      {february: [10, 5, 5]},
    ]
  }
];

