/* eslint-disable no-console */
import { env } from '@/configs'
import { readAllFilesFromDir } from '@/utils/read-dir'
import { uploadS3 } from '@/utils/s3'
import AWS from 'aws-sdk'
import path from 'path'

const { aws: awsEnv } = env

console.log({ region: awsEnv.region, accessKeyId: awsEnv.accessKeyId, secretAccessKey: awsEnv.screctAcessKey })

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

const imagesDirPath = path.resolve(__dirname, '../', '../', 'fakeimages/')

process.on('unhandledRejection', (e) => console.log(e))

export const run = async () => {
  try {
    const imageFiles = await readAllFilesFromDir(imagesDirPath)
    imageFiles.forEach(async (imageFile) => {
      const fileName = path.basename(imageFile.path.toString())
      const uploadParams = { Bucket: awsEnv.S3BucketName, Key: fileName, Body: imageFile }
      await uploadS3(s3Client, uploadParams)
      console.log('Image uploaded successfully')
    })
  } catch (e) {
    console.error(e)
  }
}

// run()
