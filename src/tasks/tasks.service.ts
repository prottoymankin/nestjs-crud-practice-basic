import { Injectable } from '@nestjs/common';
import type { Task } from './task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { FilterTaskDto } from './dto/filter-task.dto.js';

@Injectable()

export class TasksService {

  private readonly tasks: Task[] = [];

  findAll (query: FilterTaskDto) {
    const { isCompleted } = query;

    if (isCompleted === 'true') {
      return this.tasks.filter(task => task.isCompleted);
    }

    if (isCompleted === 'false') {
      return this.tasks.filter(task => task.isCompleted === false)
    }

    return this.tasks;
  };

  create(payload: CreateTaskDto) {
    const newTask = {
      id: this.tasks.length + 1,
      ...payload,
      isCompleted: false,
      createdAt: new Date()
    };

    this.tasks.push(newTask);

    return newTask;
  };

};