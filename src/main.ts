import { runApp } from './configs'
import { mongoConnect } from './configs/db'

mongoConnect()
  .then((res) => {
    console.log(res)
    runApp()
  })
  .catch((e) => {
    throw new Error(e)
  })
