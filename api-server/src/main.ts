import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- BẮT ĐẦU CẤU HÌNH SWAGGER ---

  const config = new DocumentBuilder()
    .setTitle('Academic Success Dashboard API')
    .setDescription(
      'Tài liệu API cho hệ thống Dashboard và Quản lý người dùng.',
    )
    .setVersion('1.0')
    // Nếu bạn muốn yêu cầu Token cho Authentication, hãy thêm dòng này
    // .addBearerAuth()
    .build();

  // Tạo tài liệu API dựa trên config
  const document = SwaggerModule.createDocument(app, config);

  // Thiết lập đường dẫn truy cập cho Swagger UI.
  // Bạn sẽ truy cập bằng http://localhost:5000/api
  SwaggerModule.setup('api', app, document);

  // --- KẾT THÚC CẤU HÌNH SWAGGER ---

  await app.listen(5000);
}
bootstrap();
