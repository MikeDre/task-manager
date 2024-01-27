import '../styles/modules/task-manager.css';

export default () => {
    document.addEventListener('DOMContentLoaded', () => {
        const $taskForm = document.getElementById('tm__form') as HTMLFormElement;
        const $taskNewTitle = document.getElementById('tm__new-task-title') as HTMLInputElement;
        const $taskList = document.getElementById('tm__tasks') as HTMLElement;
        const $newTaskToggle = document.getElementById('tm__new-task-toggle') as HTMLButtonElement;

        type Task = {
            title: string;
            completed: boolean;
        };

        // Check if there are tasks stored in localStorage, if not set to empty array 
        let tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]');

        function storeTaskList() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function handleAddTask(e: Event) {
            e.preventDefault();
            const submittedTask = $taskNewTitle.value.trim();

            if (submittedTask && submittedTask.length > 1) {
                tasks.unshift({
                    title: submittedTask,
                    completed: false,
                });

                storeTaskList();
                alert('New task added successfully');
                loadTasks();
            } else {
                alert('Please enter a valid task (Min 2 characters)')
            }
            console.log('tasks: ', tasks);
        }

        function handleRemoveTask(taskIndex: number) {
            tasks.splice(taskIndex, 1);

            storeTaskList();
            loadTasks();
        }

        function handleCompleteTask(taskIndex: number) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;

            storeTaskList();
            loadTasks();
        }
    
        function loadTasks() {
            $taskList.innerHTML = '';

            tasks.forEach((task, index) => {
                const $taskItem = document.createElement('li');

                $taskItem.className = `tm__task-item ${task.completed ? 'tm__task-item--completed' : ''}`;
        
                $taskItem.innerHTML = `
                    <span class="tm__task-item-name">${task.title}</span>
                    <span class="tm__task-item-options">
                        <button class="tm__btn tm__task-item-done">${task.completed ? 'Incomplete' : 'Complete'}</button>
                        <button class="tm__btn tm__task-item-delete">Delete</button>
                    <span>
                `;
        
                $taskItem.querySelector('.tm__task-item-done')?.addEventListener('click', () => handleCompleteTask(index));
                $taskItem.querySelector('.tm__task-item-delete')?.addEventListener('click', () => handleRemoveTask(index));

                $taskList.appendChild($taskItem);
            });

        }
        
        $taskForm.addEventListener('submit', handleAddTask);

        $newTaskToggle.addEventListener('click', () => {
            $taskForm.classList.toggle('hidden');
        });
    
        loadTasks();
    });
};
