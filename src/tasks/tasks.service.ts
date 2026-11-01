import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found.');
    }

    return task;
  };

  deleteOne(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);

    if (index === -1) {
      throw new NotFoundException({
        success: false,
        message: 'Task not found.'
      });
    }

    this.tasks.splice(index, 1);

    return {
      success: true,
      message: 'Task deleted successfully.',
      data: this.tasks
    };
  };

};