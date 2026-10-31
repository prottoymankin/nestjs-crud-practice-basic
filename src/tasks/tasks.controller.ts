import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { FilterTaskDto } from './dto/filter-task.dto.js';

@Controller('tasks')

export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(@Query() query: FilterTaskDto) {
    return {
      success: true,
      message: "Tasks fetched successfully.",
      data: this.taskService.findAll(query)
    };
  };

  @Post()
  create(@Body() payload: CreateTaskDto) {
    return {
      success: true,
      message: "New task created successfully.",
      data: this.taskService.create(payload)
    }
  }

};