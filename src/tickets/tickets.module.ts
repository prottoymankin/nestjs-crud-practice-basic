import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TicketsController } from './tickets.controller.js';
import { TicketsService } from './tickets.service.js';
import { RequestLoggerMiddleware } from '../common/request-logger.middleware.js';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService]
})

export class TicketsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes(TicketsController);
  };
};

//* implements NestModule দেওয়ার কারণে TypeScript নিশ্চিত করে যে TicketsModule class-এ NestModule interface-এর required configure() method implement করা হয়েছে কি না
//* MiddlewareConsumer হলো NestJS-এর দেওয়া object-এর type, আর consumer হলো সেই object-টি ধরে রাখা parameter
//* consumer-এর type MiddlewareConsumer হওয়ায় TypeScript জানে যে এই object-এর apply() ও forRoutes() method আছে।
//* consumer.apply(RequestLoggerMiddleware) → RequestLoggerMiddleware middleware-টি ব্যবহার করার জন্য বলা হচ্ছে।
//* forRoutes(TicketsController) → TicketsController-এর routes-গুলোতে middleware ব্যবহার করার জন্য বলা হচ্ছে।

//* apply() → কোন middleware ব্যবহার করবে, সেটা বলে।
//* forRoutes() → কোন controller-এর routes-এ middleware ব্যবহার করবে, সেটা বলে।