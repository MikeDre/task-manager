// Styles
import './styles/style.css';

// Modules
import taskManager from './modules/task-manager';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Task manager</h1>

    <button id="tm__new-task-toggle" class="tm__btn">Add Task</button>

    <form id="tm__form" class="hidden">
      <input type="text" id="tm__new-task-title" placeholder="Add task name..." required >
      <button type="submit" class="tm__btn" aria-label="Add new task">Add Task</button>
    </form>

    <section id="tm__task-manager">
      <ul id="tm__tasks"></ul>
    </section>
  </div>
`;

taskManager();
