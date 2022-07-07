import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('vehicle')
class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  uuid: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  year: number

  @Column()
  color: string

  @Column({ unique: true })
  plate: string

  @Column()
  price: number

  @Column({ default: false })
  isFavorite: boolean

  @CreateDateColumn()
  createdOn: Date

  @UpdateDateColumn()
  updatedOn: Date
}

export default Vehicle
