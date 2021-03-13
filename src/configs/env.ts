import * as dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const env = {
  port: process.env.APP_PORT,
  mongoDB: {
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE,
  },
}
