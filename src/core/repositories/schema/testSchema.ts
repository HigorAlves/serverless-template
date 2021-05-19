import { Document } from 'dynamoose/dist/Document'

import { DynamoDB } from '../../utils/dynamoDB'
const { model, Schema } = DynamoDB

const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME ?? 'serverless-local-test'

export const testSchema = model<ITestSchema & Document>(
	TABLE_NAME,
	new Schema(
		{
			id: {
				type: String,
				required: true,
				hashKey: true
			},
			name: {
				type: String
			}
		},
		{
			timestamps: true
		}
	)
)
