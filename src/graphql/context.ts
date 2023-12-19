import { RedisPubSub } from "graphql-redis-subscriptions";

export interface Context {
    pubsub: RedisPubSub;
}

const pubsub = new RedisPubSub({ connection: '127.0.0.1:7000' });

export const context: Context = {
    pubsub
};