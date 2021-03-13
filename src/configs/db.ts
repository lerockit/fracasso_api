import * as path from 'path'
import { Connection, createConnection } from 'typeorm'
import { env } from './env'

export const mongoConnect = async (): Promise<Connection> => {
  const { host, port, user: username, database, password } = env.mongoDB
  const connection = await createConnection({
    type: 'mongodb',
    host,
    username,
    database,
    password,
    port: +port,
    synchronize: false,
    entities: [path.resolve(__dirname, '../modules/*/*-entity.ts')],
    authSource: 'admin',
  })

  return connection
}
