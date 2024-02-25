import { Injectable } from '@nestjs/common';
import { configApp } from './config/config.app';

@Injectable()
export class AppService {
  getHello(): string {
    return configApp().secret_jwt;
  }
}
