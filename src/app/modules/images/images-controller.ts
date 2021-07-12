import { runSaveImagesJob } from '@/jobs/save-images'
import { Request, Response } from 'express'
import { ImagesService } from './images-service'

export const ImagesController = {
  async saveImages(req: Request, res: Response) {
    try {
      await runSaveImagesJob()
      res.status(204).send({})
    } catch (e) {
      res.status(400).send({
        message: e,
      })
    }
  },

  async findRandomImage(req: Request, res: Response) {
    const image = await ImagesService.findRandomImage()
    res.send(image)
  },
}
