export class BaseService {
	private repository: any;

	constructor({ repository }) {
		this.repository = repository;
	}

	async create(item) {
		return this.repository.create(item);
	}

	async findOne(id) {
		return this.repository.findOne(id);
	}
}
