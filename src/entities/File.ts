import { Entity, PrimaryColumn, Column, Index } from 'typeorm';

type AccountId = string;

@Entity()
@Index(['id', 'uploadedBy'])
export class FileEntry {
	@PrimaryColumn()
	public id: string;

	@Column()
	public mimetype: string;

	@Column({ type: 'bytea' })
	public buffer: Buffer;

	@Column({ type: 'timestamp' })
	public uploadDate: Date;

	@Column({ default: 0 })
	public views: number;

	@Column()
	public uploadedBy: AccountId;
}
