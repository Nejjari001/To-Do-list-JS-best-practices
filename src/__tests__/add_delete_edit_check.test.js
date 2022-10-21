/**
  @jest-environment jsdom
 */

  });
  
  describe('Delete task', () => {
    test('Should remove added task', () => {
      const deleteBtn = document.querySelector('.delete');
      deleteBtn.click();
      const listElement = document.querySelectorAll('textarea');
      expect(listElement).toHaveLength(0);
    });
  });
  
  describe('Edit task', () => {
    test('Should edit text when clicked', () => {
      store('Hello');
      displayTodo();
      const taskItem = document.querySelector('li');
      const taskForm = taskItem.querySelector('textarea');
      taskForm.value = 'Hey';
      const locStorage = localStorage.getItem('todolist');
      const arrTasks = JSON.parse(locStorage);
      taskForm.click();
      arrTasks[0].description = taskForm.value;
      const result = JSON.stringify(arrTasks);
      displayTodo();
      expect(result).toEqual(JSON.stringify([{
        index: 1,
        description: 'Hey',
        completed: false,
      }]));
    });
  });
