import fs from 'fs'
import path from 'path'

export const readDir = (dirPath: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (error, filenames) => {
      if (error) {
        reject(error)
      } else {
        resolve(filenames)
      }
    })
  })
}

export const readAllFilesFromDir = async (dirPath: string): Promise<fs.ReadStream[]> => {
  const fileNames = await readDir(dirPath)
  const fileStreams = fileNames.map((fileName) => {
    const filePath = path.resolve(dirPath, fileName)
    const fileStream = fs.createReadStream(filePath)
    fileStream.on('error', (err) => {
      throw err
    })
    return fileStream
  })
  return fileStreams
}
