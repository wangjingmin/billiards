import { ChatEvent } from "../../events/chatevent"
import { EventUtil } from "../../events/eventutil"
import { GameEvent } from "../../events/gameevent"

/**
 * Handle websocket connection to server
 */
export class SocketConnection {
  ws: WebSocket
  eventHandler
  retryCount = 0
  retryDelay = 1000
  sentCount = 0
  recvCount = 0
  readonly url
  constructor(url: string) {
    this.url = url
    this.connect()
  }

  connect() {
    const encoded = encodeURI(
      `${this.url}&sent=${this.sentCount}&recv=${this.recvCount}`
    )
    console.log("connecting to " + encoded)
    this.ws = new WebSocket(encoded)
    this.ws.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        // binary frame
        const s = String.fromCharCode.apply(
          null,
          Array.from(new Uint16Array(event.data))
        )
        console.log(s)
      } else {
        // text frame
        this.recvCount++
        this.eventHandler(event.data)
      }
    }
    this.ws.onclose = (event) => {
      this.notifyClient(`connection closed: ${JSON.stringify(event)}`)
      this.reconnect()
    }
    this.ws.onerror = (event) => {
      this.notifyClient(`error with connection: ${JSON.stringify(event)}`)
    }
  }

  reconnect() {
    console.log(
      `reconnecting (${this.retryCount}) after ${this.retryDelay / 1000}s`
    )
    if (this.retryCount++ < 5) {
      setTimeout(() => {
        this.connect()
      }, this.retryDelay)
      this.retryDelay += 1000
    }
  }

  notifyClient(message) {
    console.log(message)
    this.eventHandler(EventUtil.serialise(new ChatEvent("network", message)))
  }

  send(event: GameEvent) {
    event.sequence = 1 + this.sentCount++
    this.ws.send(EventUtil.serialise(event))
  }

  close() {
    console.log("Force close socket")
    this.ws.close()
  }
}
