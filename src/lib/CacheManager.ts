import cache from "@config/cache"

const IORedis = require('ioredis')

class CacheManager {
    static client

    static connect() {
        this.client = new IORedis(cache.connectionString)
    }

    static getKey(id) {
        return cache.hashKey.concat(":", id)
    }

    static async get(id) {
        return await this.client.get(this.getKey(id))
    }

    static async set(id, data, ttl=cache.expireTimeInSeconds) {
        this.client.set(this.getKey(id), JSON.stringify(data), "EX", ttl)
    }

    static async check(id) {
        const check = await this.get(id)

        if (check) {
            return true
        }

        await this.set(id, true)
    }
}

export default CacheManager