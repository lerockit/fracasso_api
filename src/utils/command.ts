import { exec } from 'child_process'

export const runAsyncCommand = (command: string) => {
  return new Promise((res, rej) => {
    exec(command, (err, stdout) => {
      if (err) rej(err)
      res(stdout)
    })
  })
}
