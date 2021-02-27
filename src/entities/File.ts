import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

type AccountId = string;

@Entity()
export class FileEntry {
	@PrimaryColumn()
	@Index()
	id: string;

	@Column()
	mimetype: string;

	@Column({ type: 'bytea' })
	buffer: Buffer;

	@Column({ type: 'timestamp' })
	uploadDate: Date;

	@Column({ default: 0 })
	views: number;

	@Column()
	@Index()
	uploadedBy: AccountId;
}
