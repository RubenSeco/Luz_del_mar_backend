import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, FileStorageService],
})
export class ProductsModule {}
