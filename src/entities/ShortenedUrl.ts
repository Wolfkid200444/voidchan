import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

@Entity()
@Index(['id'])
export class ShortenedUrl {
	@PrimaryColumn()
	public id: string;

	@Column({ default: 0 })
	public redirects: number;

	@Column()
	public destUrl: string;
}
