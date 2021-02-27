/* eslint-disable @typescript-eslint/naming-convention */

import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class AccountEntry {
	@PrimaryColumn()
	public user: string;

	@Column()
	public id: string;

	@Column({ type: 'timestamp' })
	public createdAt: Date;

	@Column({ default: 'Person' })
	public embed_username: string;

	@Column({ default: '#ff2a6d' })
	public embed_color: string;
	
	@Column({ default: "#ff2a6d" })
	public embed_background: string; // Not actually the embed, it is the background from the web, but who knows :yeahBoi:

	@Column({ default: 'Voidchan Uploads' })
	public embed_title: string;

	@Column({ array: true, type: 'text', default: null })
	public registeredDomains: Array<string>;
}
