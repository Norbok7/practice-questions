import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TaskListType = 'toDoTasks' | 'inProgressTasks' | 'completedTasks';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'] // Corrected from styleUrl to styleUrls
})
export class ToDoListComponent implements OnInit {
  newTask: string = '';
  toDoTasks: string[] = [];
  inProgressTasks: string[] = [];
  completedTasks: string[] = [];
  draggedTask: string = '';
  draggedFrom: TaskListType = 'toDoTasks'; // default to avoid undefined

  ngOnInit(): void {
    this.loadTasks();
  }

  addTask(): void {
    if (this.newTask.trim()) {
      this.toDoTasks.push(this.newTask.trim());
      this.newTask = '';
      this.saveTasks();
    }
  }

  removeFromArray(array: string[], task: string): void {
    const index = array.indexOf(task);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  onDragStart(event: DragEvent, task: string, fromList: TaskListType): void {
    this.draggedTask = task;
    this.draggedFrom = fromList;
    event.dataTransfer?.setData('text', task);
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  onDrop(event: DragEvent, toList: TaskListType): void {
    event.preventDefault();
    const task = this.draggedTask;
    const fromList = this.draggedFrom;

    if (fromList && task) {
      this.removeFromArray(this[fromList as keyof ToDoListComponent] as string[], task);
      (this[toList as keyof ToDoListComponent] as string[]).push(task);
      this.saveTasks();
    }

    this.draggedTask = '';
    this.draggedFrom = 'toDoTasks'; // reset to a default state
  }

  saveTasks(): void {
    localStorage.setItem('toDoTasks', JSON.stringify(this.toDoTasks));
    localStorage.setItem('inProgressTasks', JSON.stringify(this.inProgressTasks));
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
  }

  loadTasks(): void {
    const savedToDoTasks = localStorage.getItem('toDoTasks');
    const savedInProgressTasks = localStorage.getItem('inProgressTasks');
    const savedCompletedTasks = localStorage.getItem('completedTasks');

    if (savedToDoTasks) {
      this.toDoTasks = JSON.parse(savedToDoTasks);
    }
    if (savedInProgressTasks) {
      this.inProgressTasks = JSON.parse(savedInProgressTasks);
    }
    if (savedCompletedTasks) {
      this.completedTasks = JSON.parse(savedCompletedTasks);
    }
  }
}
