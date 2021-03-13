import { ImagesController } from '@/app/modules'
import { Router } from 'express'

const routes = Router()

routes.get('/images', ImagesController.findRandomImage)

export { routes }
