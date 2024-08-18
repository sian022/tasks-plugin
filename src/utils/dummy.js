// export const DUMMY_TASKS = {
//   toDo: Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     title: `Task ${i + 1}`,
//     description: `Description ${i + 1}`,
//     status: "To Do",
//   })),
//   inProgress: Array.from({ length: 100 }, (_, i) => ({
//     id: i + 101,
//     title: `Task ${i + 101}`,
//     description: `Description ${i + 101}`,
//     status: "In Progress",
//   })),
//   done: Array.from({ length: 100 }, (_, i) => ({
//     id: i + 201,
//     title: `Task ${i + 201}`,
//     description: `Description ${i + 201}`,
//     status: "Done",
//   })),
// };

export const DUMMY_TASKS = {
  toDo: [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "To Do",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "To Do",
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description 7",
      status: "To Do",
    },
  ],
  inProgress: [
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: "In Progress",
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      status: "In Progress",
    },
    {
      id: 8,
      title: "Task 8",
      description: "Description 8",
      status: "In Progress",
    },
    {
      id: 9,
      title: "Task 9",
      description: "Description 9",
      status: "In Progress",
    },
    {
      id: 10,
      title: "Task 10",
      description: "Description 9",
      status: "In Progress",
    },
    {
      id: 11,
      title: "Task 11",
      description: "Description 9",
      status: "In Progress",
    },
  ],
  done: [
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      status: "Done",
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description 6",
      status: "Done",
    },
  ],
};
