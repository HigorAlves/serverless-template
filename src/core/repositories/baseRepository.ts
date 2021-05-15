import { promisify } from 'util'

export class BaseRepository {
	private model: any

	constructor({ model }) {
		this.model = model
	}

	async create(item) {
		return promisify(this.model.create)(item)
	}

	async findOne(id) {
		return promisify(this.model.query)({ id: { eq: id } })
	}
}
