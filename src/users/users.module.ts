import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FileStorageService],
  exports: [UsersService],
})
export class UsersModule {



}
