import { Injectable } from '@nestjs/common';
import { FileStorageService } from 'src/common/file-storage/file-storage-service.service';
import path from 'path';
import { Pagination, Product } from 'src/common/interfaces/product.interface';

const DATA_FILE = path.join(__dirname, '../../products.json');



@Injectable()
export class ProductsService {

  constructor(
    private readonly fileStorage: FileStorageService,
  ) { }


  // create(createProductDto: CreateProductDto) {
  //   return `This action adds a new product: ${JSON.stringify(createProductDto)}`;
  // }

  findAll() {
    return this.fileStorage.read<any>(DATA_FILE);
  }

  findAllPaginated(pagination: Pagination) {
    const products = this.fileStorage.read(DATA_FILE);
    const page = pagination.page;
    const limit = pagination.limit;
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / limit);

    const start = (page - 1) * limit;
    const data = products.slice(start, start + limit);

    return {
      data,
      meta: {
        page,
        limit,
        totalItems,
        totalPages,
      },
    };
  }

  getByCategory(category: string): Product[] {

    const data: Product[] = this.fileStorage.read<any>(DATA_FILE);
    return data.filter((product: Product) => product.category === category);

  }

  getFirstByCategory(category: string):Product {

    const data = this.fileStorage.read<any>(DATA_FILE);
    return data.find((product) => product.category === category);

  }



  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }


}



