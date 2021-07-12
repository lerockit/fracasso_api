import { Image } from './image-entity'
import { ImagesRepository } from './images-repository'

export const ImagesService = {
  async findRandomImage(): Promise<Image> {
    const allImages = await ImagesRepository.findAllImages()
    return allImages[Math.floor(Math.random() * allImages.length)]
  },
}
