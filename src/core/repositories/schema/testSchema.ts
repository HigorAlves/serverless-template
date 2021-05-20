import { Document } from 'dynamoose/dist/Document'
import { DynamoDB } from 'utils/dynamoDB'
const { model, Schema } = DynamoDB

const TABLE_NAME =
	process.env.USER_REWARDS_TABLE ?? 'serverless-template-local-user-rewards'
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
