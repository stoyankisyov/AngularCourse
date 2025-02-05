import { Component, computed, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  user = input.required<User>();
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  userTasks = computed(() =>
    this.tasks.filter((task) => task.userId == this.user().id)
  );

  onCompleteTask(id: string) {
    console.log('Task completed:', id);
    this.tasks = this.userTasks().filter((task) => task.id !== id);
  }
}
