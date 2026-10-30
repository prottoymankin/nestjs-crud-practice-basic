import { Controller, Get, Query } from '@nestjs/common';
import { TasksService } from './tasks.service.js';

@Controller('tasks')

export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(@Query('isCompleted') isCompleted?: string) {
    return {
      success: true,
      message: "Tasks fetched successfully.",
      data: this.taskService.findAll(isCompleted)
    };
  };

};