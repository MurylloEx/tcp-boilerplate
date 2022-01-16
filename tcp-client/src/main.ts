import { clientConnect } from "tcp-controller";
import { MainController } from './controllers/tcp.controller';

async function bootstrap(){
  clientConnect(MainController);
}

bootstrap();
