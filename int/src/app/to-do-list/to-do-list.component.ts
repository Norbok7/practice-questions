import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TaskListType = 'toDoTasks' | 'inProgressTasks' | 'completedTasks';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] // Corrected from styleUrl to styleUrls
})
export class ToDoListComponent {
  newTask: string = '';
  toDoTasks: string[] = [];
  inProgressTasks: string[] = [];
  completedTasks: string[] = [];
  draggedTask: string = '';
  draggedFrom: TaskListType = 'toDoTasks'; // Default to avoid undefined

  addTask(): void {
    if (this.newTask.trim()) {
      this.toDoTasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  removeFromArray(array: string[], task: string): void {
    const index = array.indexOf(task);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  onDragStart(event: DragEvent, task: string, fromList: TaskListType): void {
    event.dataTransfer?.setData('text/plain', task);
    this.draggedTask = task;
    this.draggedFrom = fromList;
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault(); // Necessary to allow drop
    event.dataTransfer!.dropEffect = 'move'; // Indicate the drop effect
  }

  onDrop(event: DragEvent, toList: TaskListType): void {
    event.preventDefault();
    const task = event.dataTransfer?.getData('text/plain');
    if (task && this.draggedFrom && toList) {
      this.removeFromArray(this[this.draggedFrom], task);
      this[toList].push(task);
    }
    this.draggedTask = '';
    this.draggedFrom = 'toDoTasks'; // Reset to a default state
  }
}
