import { BaseRepository } from './baseRepository'
import { model } from './schema/testSchema'

export class TestRepository extends BaseRepository {
	constructor() {
		super({ model })
	}
}
