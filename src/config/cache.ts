export default {
    connectionString: process.env.CACHE_CONNECTIONSTRING,
    expireTimeInSeconds: parseInt(process.env.CACHE_EXPIRETIMEINSECONDS || "0"),
    hashKey: process.env.CACHE_HASHKEY,
}