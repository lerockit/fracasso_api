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
  aws: {
    region: process.env.AWS_REGION,
    S3BucketName: process.env.AWS_S3_BUCKET_NAME,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    screctAcessKey: process.env.AWS_SECRECT_ACESS_KEY,
  },
  instagramUsername: process.env.INSTAGRAM_USERNAME,
}
