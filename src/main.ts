import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Task manager</h1>
    <form id="tm__form">
      <input type="text" id="tm__new-task-title" placeholder="Add task name..." required >
      <button type="submit">Add Task</button>
    </form>

    <ul id="tm__tasks"></ul>
  </div>
`
