import { Injectable } from '@nestjs/common';
import type { Task } from './task.interface.js';

@Injectable()

export class TasksService {

  private readonly tasks: Task[] = [];

  findAll (isCompleted?: string) {
    if (isCompleted === 'true') {
      return this.tasks.filter(task => task.isCompleted);
    }

    if (isCompleted === 'false') {
      return this.tasks.filter(task => task.isCompleted === false)
    }

    return this.tasks;
  };

  create(payload: any) {
    const newTask = {
      id: this.tasks.length + 1,
      ...payload,
      createdAt: new Date()
    };

    this.tasks.push(newTask);

    return newTask;
  };

};