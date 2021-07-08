import { ImagesService } from '@/app/modules/images/images-service'
import { mongoConnect } from '@/configs/db'
import { runRemoveImagesJobs } from './remove-images'
import { runSaveImageAwsJob } from './save-images-aws'
import { runScrapInstagramJob } from './scrap-instagram'

const runSaveImagesJob = async () => {
  try {
    await runScrapInstagramJob()
    const imagesUploaded = await runSaveImageAwsJob()
    await ImagesService.saveImages(imagesUploaded.data)
    console.log('Images saved successfully')
    await runRemoveImagesJobs(imagesUploaded.streams)
  } catch (error) {
    throw new Error(error)
  }
}

const run = async () => {
  const connection = await mongoConnect()
  try {
    await runSaveImagesJob()
  } catch (e) {
    throw new Error(e)
  } finally {
    connection.close()
  }
}

run()
