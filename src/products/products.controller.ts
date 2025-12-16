import { ProductsService } from './products.service';
// import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {


  constructor(private readonly productsService: ProductsService) { }

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }

  @Get("category/:category")
  getProductsByCategory(@Query('category') category: string) {
    return this.productsService.getByCategory(category);
  }


  @Get("first-category/:category")
  getFirstProductByCatetory(@Param('category') category: string) {
    return this.productsService.getFirstByCategory(category);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }


  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productsService.create(createProductDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }
}
