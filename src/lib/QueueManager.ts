import { Connection, Channel, connect, Message } from "amqplib";
import queue from "@config/queue";

export default class QueueManager {
  private conn: Connection;
  private channel: Channel;
  
  async start(): Promise<void> {
    this.conn = await connect(queue.url);
    this.channel = await this.conn.createChannel();
  }

  async publishInQueue(queue: string, message: string) {
    return this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async publishInExchange(
    exchange: string,
    routingKey: string,
    message: string
  ): Promise<boolean> {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }

  async consume(queue: string, callback: (message: Message) => void) {
    this.channel.assertQueue(queue, {
      durable: false
    });
    
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    });
  }
}