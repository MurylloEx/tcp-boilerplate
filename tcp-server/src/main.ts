import { createServer } from 'tcp-controller';
import { MainController } from 'src/controllers';

async function bootstrap(){
  createServer(MainController);
}

bootstrap();
