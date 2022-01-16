import { createServer } from "tcp-controller";
import { MainController } from './controllers/tcp.controller';

async function bootstrap(){
  createServer(MainController);
}

bootstrap();
