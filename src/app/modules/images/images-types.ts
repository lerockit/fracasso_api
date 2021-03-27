export type ImageType = {
  id: string
  url: string
}

export type SaveImageType = Omit<ImageType, 'id'>
