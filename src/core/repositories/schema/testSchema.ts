import { model as Model, Schema } from "dynamoose";

const schema = new Schema({
	id: {
		type: String,
		required: true,
		hashKey: true
	},
	name: {
		type: String,
		required: true
	}
})

export const model = Model(process.env.DYNAMODB_TABLE_NAME, schema);
