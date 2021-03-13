import { Request, Response } from 'express'

export const ImagesController = {
  findRandomImage(req: Request, res: Response) {
    res.send({
      image: 'ok',
    })
  },
}
