import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, FileStorageService],
})
export class AdminModule {}
