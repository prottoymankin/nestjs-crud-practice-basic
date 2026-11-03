import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
  }
};

//* interface দিয়ে আমরা কোনো object বা class-এর structure define করি। আর implements ব্যবহার করে ensure করি যে কোনো class সেই interface-এর নির্ধারিত structure অনুসরণ করছে কি না
//* RequestLoggerMiddleware implements NestMiddleware মানে হলো, RequestLoggerMiddleware class-টি NestMiddleware-এর required structure সঠিকভাবে follow করেছে কি না
//* req.method → কোন HTTP method দিয়ে request করা হয়েছে, যেমন GET, POST, PATCH, DELETE
//* req.originalUrl → সম্পূর্ণ API URL বা route দেয়, যেমন /api/tickets
//* use() হলো middleware-এর মূল method, যা incoming request, response এবং next() function গ্রহণ করে। এর ভিতরে middleware-এর কাজ লিখি এবং কাজ শেষে next() দিয়ে request-কে পরবর্তী middleware বা controller-এর কাছে পাঠাই