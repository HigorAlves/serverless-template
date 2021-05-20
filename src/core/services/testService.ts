import { TestRepository } from 'core/repositories/testRepository'

export class TestService {
	repository: TestRepository

	constructor(repository) {
		this.repository = repository
	}

	async findOne(id: number) {
		return this.repository.findOne(id)
	}

	async create(data: any) {
		return this.repository.create(data)
	}
}
