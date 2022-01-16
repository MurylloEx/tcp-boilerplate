import { Socket } from "net";
import {
  createServer,
  TcpGateway,
  TcpBuffer,
  TcpClientConnected,
  TcpClientDisconnected,
  TcpController,
  TcpCriteria,
  TcpCriteriaId,
  TcpError,
  TcpListening,
  TcpMessage,
  TcpMessageStream,
  TcpSocket
} from "tcp-controller";

@TcpController("0.0.0.0", 1337)
@TcpMessageStream()
class TcpServer extends TcpGateway {

  @TcpClientConnected()
  onConnect(@TcpSocket() sock: Socket) {
    console.log("[Server] Connected client from " + sock.remoteAddress);
    this.send(sock, Buffer.from("Server to client!"));
    this.send(sock, Buffer.from("5erver to client!"));
  }

  @TcpClientDisconnected()
  onDisconnect(hadError: boolean) {
    console.log("[Server] Disconnected client with error? " + hadError);
  }

  @TcpError()
  onError(error: Error) {
    console.log("[Server] Error happened: " + error.message);
  }

  @TcpListening()
  onListening() {
    console.log("[Server] Server up.");
  }

  @TcpCriteria("message")
  @TcpMessage()
  onMessage(@TcpBuffer() buffer: Buffer, @TcpSocket() sock: Socket) {
    console.log("[Server] Message received from " + sock.remoteAddress + ".\nMessage: " + buffer.toString());
  }

  @TcpCriteriaId("message")
  isMessage(@TcpBuffer() buffer: Buffer) {
    return buffer.toString().includes("Client to server!");
  }

}

createServer(TcpServer);