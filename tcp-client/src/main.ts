import { clientConnect } from "tcp-controller";
import { MainController } from './controllers/tcp.service';

async function bootstrap(){
  clientConnect(MainController);
}

bootstrap();
