import { 
  TcpBuffer, 
  TcpCriteriaId, 
  TcpGateway 
} from 'tcp-controller';

export class MainGateway extends TcpGateway {

  @TcpCriteriaId('message')
  isMessage(@TcpBuffer() buffer: Buffer) {
    return buffer.toString().includes('Client to server!');
  }

}
