import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
