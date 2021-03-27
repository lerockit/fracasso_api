import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class Image {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  url: string
}
