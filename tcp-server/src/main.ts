import { createServer } from "tcp-controller";
import { MainController } from './controllers/tcp.service';

async function bootstrap(){
  createServer(MainController);
}

bootstrap();
