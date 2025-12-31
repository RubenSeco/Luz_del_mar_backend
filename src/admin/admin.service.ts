import { Injectable } from '@nestjs/common';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';
import { Product } from 'src/common/interfaces/product.interface';
import path from 'path';

const DATA_FILE = path.join(__dirname, '../../products.json');

@Injectable()
export class AdminService {

  constructor(private readonly fileStorge: FileStorageService) { }



  getById(id: string): Product {
    const data = this.fileStorge.read<any>(DATA_FILE);
    return data.find((product) => product.id === id);
  }


  update(id: string, product: Product) {
    const data = this.fileStorge.read(DATA_FILE) as Product[];
    const index = data.findIndex((item: Product) => item.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...product };
    this.fileStorge.write(DATA_FILE, data);
    return data[index];
  }

}
