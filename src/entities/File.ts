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

	// This is going to be used in the future with the introduction of a login page,
	// that way only the person who uploaded the image is able to see it.
	@Column({ type: 'bool'})
	public private: boolean;

	@Column()
	public uploadedBy: AccountId;
}
