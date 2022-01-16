import { Socket } from "net";
import { MainGateway } from "../routers/tcp.router";
import {
  TcpBuffer,
  TcpClientConnected,
  TcpClientDisconnected,
  TcpController,
  TcpCriteria,
  TcpError,
  TcpMessage,
  TcpMessageStream,
  TcpSocket
} from "tcp-controller";

@TcpController("localhost", 1337)
@TcpMessageStream()
export class MainController extends MainGateway {

  @TcpClientConnected()
  onConnect(@TcpSocket() sock: Socket) {
    console.log("[Client] Connected to server " + sock.remoteAddress);
    this.send(sock, Buffer.from("Client to server!"));
    this.send(sock, Buffer.from("Client to 5erver!"));
  }

  @TcpClientDisconnected()
  onDisconnect(hadError: boolean) {
    console.log("[Client] Disconnected with error? " + hadError);
  }

  @TcpError()
  onError(error: Error) {
    console.log("[Client] Error happened: " + error.message);
  }

  @TcpCriteria("message")
  @TcpMessage()
  onMessage(@TcpBuffer() buffer: Buffer, @TcpSocket() sock: Socket) {
    console.log("[Client] Message received from " + sock.remoteAddress + ".\nMessage: " + buffer.toString());
  }

}