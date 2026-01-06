import { Injectable } from '@nestjs/common';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';
import { Product } from 'src/common/interfaces/product.interface';
import path from 'path';
import { DATA_DIR, DATA_FILES } from 'src/data/data.constants';

const PRODUCTS_FILE = path.join(DATA_DIR, DATA_FILES.products);

@Injectable()
export class AdminService {

  constructor(private readonly fileStorge: FileStorageService) { }



  getById(id: string): Product {
    const data = this.fileStorge.read<any>(PRODUCTS_FILE);
    return data.find((product) => product.id === id);
  }


  update(id: string, product: Product) {
    const data = this.fileStorge.read(PRODUCTS_FILE) as Product[];
    const index = data.findIndex((item: Product) => item.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...product };
    this.fileStorge.write(PRODUCTS_FILE, data);
    return data[index];
  }

}
