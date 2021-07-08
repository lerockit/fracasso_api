import { unlink } from 'fs/promises'
import { ReadStream } from 'node:fs'

export const runRemoveImagesJobs = async (imageStreams: ReadStream[]) => {
  const promises = imageStreams.map(async (imageStream) => await unlink(imageStream.path))
  await Promise.all(promises)
  console.log('Images removed succesfully')
}
