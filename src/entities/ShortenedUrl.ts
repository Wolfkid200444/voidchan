import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ShortenedUrl {
	@PrimaryColumn()
	id: string;

	@Column({ default: 0 })
	redirects: number;

	@Column()
	destUrl: string;
}
