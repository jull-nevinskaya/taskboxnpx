import Task from './Task.jsx';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs'],
};

export const Default = {
    args: {
        task: {
            id: '1',
            title: 'Test Task',
            state: 'TASK_INBOX',
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_PINNED',
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED',
        },
    },
};

export const LongTitle = {
    args: {
        task: {
            ...Default.args.task,
            title: 'Checkbox for archiving the current task, disabled when task is archived, with unique identifier and label for accessibility, styled as a custom checkbox. Checkbox for archiving the current task, disabled when task is archived, with unique identifier and label for accessibility, styled as a custom checkbox.',
            state: 'TASK_LONG_TITLE',
        },
    },
};

export const ArchivedAndPinned = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_ARCHIVED_AND_PINNED',
        },
    },
};

export const OverdueTask = {
    args: {
        task: {
            ...Default.args.task,
            state: 'TASK_OVERDUE',
        },
    },
};