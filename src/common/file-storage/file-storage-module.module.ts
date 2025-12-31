import { Module } from '@nestjs/common';
import { FileStorageService } from './file-storage-service.service';

@Module({
  providers: [FileStorageService],
  exports: [FileStorageService], // 👈 clave para reutilizarlo
})
export class FileStorageModule { }