import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column({ default: false })
  isCompleted: boolean;

  @CreateDateColumn()
  created_at: Date;
}
