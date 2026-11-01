import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import type { Task } from './task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { FilterTaskDto } from './dto/filter-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

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

    return {
      success: true,
      message: "Tasks fetched successfully.",
      data: this.tasks
    };
  };

  create(payload: CreateTaskDto) {
    const newTask = {
      id: this.tasks.length + 1,
      ...payload,
      isCompleted: false,
      createdAt: new Date()
    };

    this.tasks.push(newTask);

    return {
      success: true,
      message: "New task created successfully.",
      data: newTask
    };
  };

  findOne(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found.');
    }

    return {
      success: true,
      message: "Task fetched successfully.",
      data: task
    };
  };

  deleteOne(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);

    if (index === -1) {
      throw new NotFoundException('Task not found.');
    }

    this.tasks.splice(index, 1);

    return {
      success: true,
      message: 'Task deleted successfully.',
      data: this.tasks
    };
  };

  updateOne(id: number, payload: UpdateTaskDto) {
    const { title, description } = payload;
    
    if (!title?.trim() && !description?.trim()) {
      throw new BadRequestException('At least one field is required to update task.');
    }

    const task = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found.');
    }

    if (title?.trim()) {
      task.title = title;
    }

    if (description?.trim()) {
      task.description = description;
    }

    return {
      success: true,
      message: 'Task updated successfully.',
      data: task
    };
  };

};