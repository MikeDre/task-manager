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

        // Toggle new task input
        $newTaskToggle.addEventListener('click', () => {
            $taskForm.classList.toggle('hidden');
        });
    });
};
