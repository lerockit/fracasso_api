import { ImagesRepository } from '@/app/modules/images/images-repository'
import { runRemoveImagesJobs } from './remove-images'
import { runSaveImageAwsJob } from './save-images-aws'
import { runScrapInstagramJob } from './scrap-instagram'

export const runSaveImagesJob = async () => {
  try {
    await runScrapInstagramJob()
    const imagesUploaded = await runSaveImageAwsJob()
    if (!imagesUploaded.data.length) return console.log('Nothing updated')
    await ImagesRepository.saveImages(imagesUploaded.data)
    console.log('Images saved successfully on database')
    await runRemoveImagesJobs(imagesUploaded.streams)
  } catch (error) {
    throw new Error(error)
  }
}
