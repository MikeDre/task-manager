// Styles
import './styles/style.css';

// Modules
import taskManager from './modules/task-manager';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Task manager</h1>

    <button id="tm__new-task-toggle">Add Task</button>

    <form id="tm__form" class="hidden">
      <input type="text" id="tm__new-task-title" placeholder="Add task name..." required >
      <button type="submit">Add Task</button>
    </form>

    <ul id="tm__tasks"></ul>
  </div>
`;

taskManager();
