import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service.js';
import { Ticket } from './ticket.interface.js';
import { CreateTicketDto } from './dto/create-ticket.dto.js';
import { FilterTicketQueryDto } from './dto/filter-ticket-query.dto.js';

@Controller('tickets')

export class TicketsController {

  constructor (private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(@Query() filters: FilterTicketQueryDto) {
    return this.ticketsService.findAll(filters);
  };

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.findOne(id);
  };

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto)
  }

};