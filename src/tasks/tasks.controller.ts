import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { FilterTaskDto } from './dto/filter-task.dto.js';

@Controller('tasks')

export class TasksController {

  constructor(private readonly taskService: TasksService) {}

  @Get()
  findAll(@Query() query: FilterTaskDto) {
    return this.taskService.findAll(query);
  };

  @Post()
  create(@Body() payload: CreateTaskDto) {
    return this.taskService.create(payload);
  };

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  };

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {
    return this.taskService.deleteOne(id);
  };

};