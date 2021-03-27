import AWS from 'aws-sdk'

export const uploadS3 = (
  S3Client: AWS.S3,
  uploadParams: AWS.S3.PutObjectRequest,
): Promise<AWS.S3.ManagedUpload.SendData> => {
  return new Promise((resolve, reject) => {
    console.log('chegou aqui')
    S3Client.upload(uploadParams, (err, data) => {
      console.log('aaaaaaa')
      if (err) reject(err)
      resolve(data)
    })
  })
}
