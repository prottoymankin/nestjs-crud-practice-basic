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

  findAll () {
    return this.tasks;
  }

};