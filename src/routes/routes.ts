import { ImagesController } from '@/app/modules'
import { Router } from 'express'

const routes = Router()

routes.get('/save-images', ImagesController.saveImages)
routes.get('/random-image', ImagesController.findRandomImage)

export { routes }
