import { runAsyncCommand } from '@/utils/command'
import { readFile, unlink, writeFile } from 'fs/promises'
import path from 'path'

const profileName = 'lerockit'
const profileIdFilePath = path.resolve(__dirname, '../', '../', `${profileName}/`, 'id')
const logPath = path.resolve(__dirname, '../', '../', 'scrap.log')

export const runScrapInstagramJob = async () => {
  const previousDateString = await getPreviousDateString()
  const commandFilters = previousDateString ? `--post-filter="date_utc > ${previousDateString}"` : ''
  const commandParams = '-V --no-video-thumbnails --no-captions --no-metadata-json --no-profile-pic'
  const command = `instaloader ${commandFilters} profile ${profileName} ${commandParams}`
  await runAsyncCommand(command)
  await unlink(profileIdFilePath)
  await writeFile(logPath, generateNowDateString())
  console.log('Scraped successfully')
}

const generateNowDateString = () => {
  const now = new Date()
  return `datetime(${now.getFullYear()}, ${now.getMonth() + 1}, ${now.getDate()})`
}

const getPreviousDateString = async () => {
  try {
    const dateString = await readFile(logPath, { encoding: 'utf-8' })
    return dateString
  } catch {
    return null
  }
}
