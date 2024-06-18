import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './UserModule/user.controller';
import { UserModule } from './UserModule/user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


