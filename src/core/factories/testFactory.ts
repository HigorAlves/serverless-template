import { TestRepository } from '../repositories/testRepository'
import { TestService } from '../services/testService'

export async function createInstance() {
	const repository = new TestRepository()
	return new TestService({ repository })
}
