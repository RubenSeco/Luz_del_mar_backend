import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Module({
  controllers: [UsersController],
  providers: [UsersService, FileStorageService, { provide: APP_GUARD, useClass: RolesGuard }],
  exports: [UsersService],
})
export class UsersModule {}
