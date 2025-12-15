import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
// Import các Decorator của Swagger
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('users') // Thẻ sẽ hiển thị trong Swagger UI
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo một người dùng mới' }) // Mô tả cho Endpoint này
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả người dùng' })
  findAll() {
    return this.userService.findAll();
  }
  // ... các phương thức khác
}
