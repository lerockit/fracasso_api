import { env } from '@/configs/env'
import { readAllFilesFromDir } from '@/utils/read-dir'
import { uploadS3 } from '@/utils/s3'
import AWS from 'aws-sdk'
import path from 'path'

const { aws: awsEnv, instagramUsername } = env

const s3Client = new AWS.S3({
  maxRetries: 2,
  httpOptions: {
    connectTimeout: 2 * 1000,
    timeout: 5 * 1000,
  },
  region: awsEnv.region,
  accessKeyId: awsEnv.accessKeyId,
  secretAccessKey: awsEnv.screctAcessKey,
})

const imagesDirPath = path.resolve(__dirname, '../', '../', `${instagramUsername}/`)

process.on('unhandledRejection', (e) => console.log(e))

export const runSaveImageAwsJob = async () => {
  try {
    const imageFileStreams = await readAllFilesFromDir(imagesDirPath)
    const imagePromises = imageFileStreams.map(async (imageFile) => {
      const fileName = path.basename(imageFile.path.toString())
      const uploadParams: AWS.S3.PutObjectRequest = {
        Bucket: awsEnv.S3BucketName,
        Key: fileName,
        Body: imageFile,
        ACL: 'public-read',
      }
      const imagePromise = await uploadS3(s3Client, uploadParams)
      console.log('Image uploaded successfully')
      return { url: imagePromise.Location }
    })
    return {
      data: await Promise.all(imagePromises),
      streams: imageFileStreams,
    }
  } catch (e) {
    throw new Error(e)
  }
}
