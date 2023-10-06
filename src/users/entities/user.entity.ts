import { RoadmapEntity } from 'src/roadmaps/entities/roadmap.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Role.User })
  role: Role;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  github?: string;

  @Column({ nullable: true })
  telegram?: string;

  @OneToMany(() => RoadmapEntity, (roadmap) => roadmap.author)
  authoredRoadmaps: RoadmapEntity[];
}
