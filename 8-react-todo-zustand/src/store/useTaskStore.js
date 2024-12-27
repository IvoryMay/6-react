import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, task: "Finish project report", isDone: false },
    { id: 2, task: "Buy groceries", isDone: false },
    { id: 3, task: "Schedule dentist appointment", isDone: true },
    { id: 4, task: "Plan birthday party", isDone: false },
    { id: 5, task: "Read new book", isDone: false },
  ],
  addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
  removeTask: (taskId) =>
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) })),

  doneTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.map((el) =>
        el.id === taskId ? { ...el, isDone: !el.isDone } : el
      ),
    })),
}));

export default useTaskStore;
