import { observable } from 'mobx';

interface viewInterface {
  isGrid: boolean,
  handleChange: (option: boolean) => void;
}

const ViewSelector = observable<viewInterface>({
  isGrid: true,

  handleChange(option) {
    this.isGrid = option;
  },
});
export default ViewSelector;


// 예제 template
// export interface TodoData {
//   id: number,
//   content: string,
//   checked: boolean
// }

// interface Todo {
//   todoData: TodoData[],
//   currentId: number,
//   addTodo: (content: string) => void;
//   removeTodo: (id: number) => void;
// }

// const TodoStore = observable<Todo>({
//   todoData: [],
//   currentId: 0,

//   addTodo(content) {
//     this.todoData.push({ id: this.currentId, content, checked: false });
//     this.currentId += 1;
//   },

//   removeTodo(id) {
//     const index = this.todoData.findIndex((item) => item.id === id);
//     if (id !== -1) {
//       this.todoData.splice(index, 1);
//     }
//   },
// });
// export default TodoStore;
