import { IsEmail, IsString } from 'class-validator';

export class NotifyEmailDto {
  @IsString()
  @IsEmail()
  email: string;
}
