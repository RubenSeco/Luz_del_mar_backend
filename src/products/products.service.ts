/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_FILE = path.join(__dirname, '../../products.json');

@Injectable()
export class ProductsService {

  private async readData(): Promise<CreateProductDto[]> {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data) as any[];
  }

  private async writeData(data: any): Promise<void> {
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  }

  async findAll(): Promise<CreateProductDto[]> {
    return this.readData();
  }

  async findAllPaginated({ page, limit }: PaginationQueryDto) {
    const products = await this.readData();
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

  async getByCategory(category: string): Promise<CreateProductDto[]> {
    return this.readData().then((products: CreateProductDto[]) =>
      products.filter((product) => product.category === category),
    );
  }

  async getFirstByCategory(category: string): Promise<CreateProductDto | undefined> {
    return this.readData().then((products: CreateProductDto[]) =>
      products.find((product) => product.category === category),
    );
  }


  // create(createProductDto: CreateProductDto) {
  //   return `This action adds a new product: ${JSON.stringify(createProductDto)}`;
  // }


  async getById(id: string) {
    const data = await this.readData() as CreateProductDto[];
    return data.find((item) => item.id === id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {

    const data = await this.readData() as UpdateProductDto[];
    const index = data.findIndex((item: UpdateProductDto) => item.id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...updateProductDto };
    await this.writeData(data);
    return data[index];
  }

  // remove(id: number) {
  //   return `This action removes a #${id} product`;
  // }


}



