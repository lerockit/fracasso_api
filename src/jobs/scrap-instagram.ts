import { runAsyncCommand } from '@/utils/command'
import { unlink } from 'fs/promises'
import path from 'path'

const COMMAND = 'instagram-scraper lerockit --media-types image --latest-stamps instagram-scraper-log.txt'
const PROFILE_PIC_PATH = path.resolve(
  __dirname,
  '../',
  '../',
  'lerockit/',
  '132092568_692080181417617_6270145563782521990_n.jpg',
)

export const runScrapInstagramJob = async () => {
  await runAsyncCommand(COMMAND)
  await unlink(PROFILE_PIC_PATH)
  console.log('Scraped successfully')
}
