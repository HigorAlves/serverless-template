import { Document } from 'dynamoose/dist/Document'
import { ModelType } from 'dynamoose/dist/General'

import { testSchema } from './schema/testSchema'

export class TestRepository {
	private schema: ModelType<Document & ITestSchema>

	constructor() {
		this.schema = testSchema
	}

	async findOne(id: number): Promise<ITestSchema[]> {
		try {
			return await this.schema.query('id').eq(id.toString()).exec()
		} catch (e) {
			console.error('SOME ERROR', e)
		}
	}

	async create(data: any): Promise<any> {
		try {
			return await this.schema.create(data)
		} catch (e) {
			console.error('SOME ERROR CREATE', e)
		}
	}
}
