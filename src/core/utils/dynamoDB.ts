import * as dynamoose from 'dynamoose'

export function DynamoDB() {
	if (process.env.NODE_ENV !== 'development') return

	const HOST = process.env.LOCALSTACK_HOST
	const PORT = process.env.DYNAMODB_PORT

	dynamoose.aws.ddb.local(`http://${HOST}:${PORT}`)
}
