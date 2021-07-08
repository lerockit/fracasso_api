import { runApp } from './configs'
import { mongoConnect } from './configs/db'

mongoConnect()
  .then(() => runApp())
  .catch((e) => {
    throw new Error(e)
  })
