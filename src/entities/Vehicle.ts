import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('vehicle')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @Column()
  value: number

  @Column()
  description: string

  @Column()
  year: number

  @Column()
  color: string

  @Column({ default: false })
  isFavorite: boolean

  @CreateDateColumn()
  createdOn: Date

  @UpdateDateColumn()
  updatedOn: Date
}

export default Vehicle
