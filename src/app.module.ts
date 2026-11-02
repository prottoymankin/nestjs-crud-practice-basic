import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module.js';
import { TicketsModule } from './tickets/tickets.module.js';

@Module({
  imports: [TasksModule, TicketsModule],
})

export class AppModule {}