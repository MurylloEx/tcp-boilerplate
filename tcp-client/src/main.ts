import { clientConnect } from 'tcp-controller';
import { MainController } from 'src/controllers';

async function bootstrap(){
  clientConnect(MainController);
}

bootstrap();
