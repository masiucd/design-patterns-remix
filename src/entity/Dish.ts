import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dish {
  @PrimaryGeneratedColumn()
  id: number;
}
