import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }



  @Get('dashboard/product/:id')
  getProductById(@Param('id') id: string): CreateProductDto {
    return this.adminService.getById(id);
  }

  @Patch('/dashboard/product/:id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // Omit 'id' property if present to match Product type
    const { id: string, ...productData } = updateProductDto;
    return this.adminService.update(id, productData as any);
  }


}
