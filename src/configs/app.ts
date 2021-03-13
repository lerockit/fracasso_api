import { routes } from '@/routes'
import cors from 'cors'
import express from 'express'
import { env } from './env'

export const runApp = (): void => {
  const { port: appPort } = env
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(routes)
  // eslint-disable-next-line no-console
  app.listen(appPort, () => console.log(`Running on port ${appPort}`))
}
