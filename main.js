class Todo {
  constructor() {
    this.todosList = [];
    this.currentTodosId = 1;
  }

  addItem(title, priority) {
    const todo = {};
    todo.id = this.currentTodosId;
    this.currentTodosId++;
    todo.title = title;
    todo.priority = priority;

    this.todosList.push(todo);

    return todo.id;
  }

  removeItem(id) {
    const removedItem = this.todosList.findIndex(todo => todo.id === id);

    if (removedItem >= 0) {
      this.todosList.splice(removedItem, 1);
      return true;
    }
    
    return false;
  }

  getItem(id) {
    const item = this.todosList.find(todo => todo.id === id);

    if (item) { return item; }

    return null;
  }

  next() {
    try {
      const maxPriorityItem = Math.max(...this.todosList.map(todo => todo.priority));
      
      if (!this.todosList.length || maxPriorityItem === NaN) {
        throw new Error ('Empty array: there are no items in the list');
      } 

      return this.todosList.find(todo => todo.priority === maxPriorityItem);;
    } catch(error) {
      return error.message;
    }
  }
}

const test = new Todo;

test.addItem('sdfdf', 9);
test.addItem('ddcvxc', 5);
test.addItem('deleted1', 6);
test.addItem('2584', 9);
test.addItem('sdghrst', 4);
test.addItem('fhfgassd', 2);
test.addItem('fgsde', 7);
test.addItem('deleted2', 3);

test.removeItem(3);
test.removeItem(8);
