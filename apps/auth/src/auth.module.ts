import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    UsersModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGODB_URI: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_SEC: Joi.number().default(3600),
      }),
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
