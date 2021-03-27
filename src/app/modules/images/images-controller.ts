import { Request, Response } from 'express'
import { ImagesService } from './images-service'

export const ImagesController = {
  findRandomImage(req: Request, res: Response) {
    const image = ImagesService.findRandomImage()
    res.send({
      image: 'ok',
    })
  },
}
