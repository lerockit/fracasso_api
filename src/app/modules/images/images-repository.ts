import { getConnection } from 'typeorm'
import { Image } from './image-entity'
import { SaveImageType } from './images-types'

export const ImagesRepository = {
  async saveImages(imagesData: SaveImageType[]): Promise<void> {
    const connection = getConnection().manager
    await connection.insert(Image, imagesData)
  },

  async findAllImages(): Promise<Image[]> {
    const connection = getConnection().manager
    return await connection.find(Image)
  },
}
