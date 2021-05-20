import { TestRepository } from 'core/repositories/testRepository'
import { TestService } from 'core/services/testService'

export async function createInstance() {
	const repository = new TestRepository()
	return new TestService(repository)
}
