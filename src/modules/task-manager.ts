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

        $taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submittedTask = $taskNewTitle.value;

            if (submittedTask && submittedTask.length > 1) {
                console.log('submitted task: ', submittedTask)
            } else {
                alert('Please enter a valid task (Min 2 characters)')
            }
        });

        // Toggle new task input
        $newTaskToggle.addEventListener('click', () => {
            $taskForm.classList.toggle('hidden');
        });
    });
};
