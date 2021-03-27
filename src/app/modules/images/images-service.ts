import { ImagesRepository } from './images-repository'
import { SaveImageType } from './images-types'

export const ImagesService = {
  findRandomImage() {},
  async saveImages(imagesData: SaveImageType[]): Promise<void> {
    await ImagesRepository.saveImages(imagesData)
  },
}
