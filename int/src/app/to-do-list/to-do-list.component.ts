import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  newTask: string = '';
  toDoTasks: string[] = [];
  inProgressTasks: string[] = [];
  completedTasks: string[] = [];

  addTask(): void {
    if (this.newTask.trim()) {
      this.toDoTasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  moveToInProgress(task: string): void {
    this.removeFromArray(this.toDoTasks, task);
    this.inProgressTasks.push(task);
  }

  moveToCompleted(task: string): void {
    this.removeFromArray(this.inProgressTasks, task);
    this.completedTasks.push(task);
  }

  moveToToDo(task: string): void {
    this.removeFromArray(this.inProgressTasks, task);
    this.toDoTasks.push(task);
  }

  removeTask(task: string): void {
    this.removeFromArray(this.completedTasks, task);
  }

  removeFromArray(array: string[], task: string): void {
    const index = array.indexOf(task);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
}
