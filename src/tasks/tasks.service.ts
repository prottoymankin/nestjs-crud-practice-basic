import { Injectable } from '@nestjs/common';

@Injectable()

export class TasksService {

  private readonly tasks = [
    {
      id: 1,
      title: 'Task 1 title',
      description: 'Task 1 description',
      isCompleted: true
    },
    {
      id: 2,
      title: 'Task 2 title',
      description: 'Task 2 description',
      isCompleted: false
    }
  ];

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