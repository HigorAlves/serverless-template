import * as https from 'https'

import * as dynamoose from 'dynamoose'

// Improve DynamoDB latency by enabling HTTP keepAlive
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html
let httpAgent = new https.Agent({
	rejectUnauthorized: true,
	keepAlive: true
})

if (!process.env.IS_LOCAL && !process.env.JEST_WORKER_ID) {
	dynamoose.aws.sdk.config.update({
		region: process.env.REGION || 'us-east-1',
		httpOptions: {
			agent: httpAgent
		}
	})
}

dynamoose.model.defaults.set({
	create: false,
	update: false,
	waitForActive: false
})

if (process.env.IS_LOCAL || process.env.NODE_ENV.includes('test')) {
	httpAgent = undefined
	if (process.env.NODE_ENV.includes('test')) {
		dynamoose.aws.sdk.config.update({
			region: 'localhost',
			accessKeyId: 'some_id',
			secretAccessKey: 'some_secret',
			sslEnabled: false
		})
		dynamoose.aws.ddb.local()
	} else {
		dynamoose.aws.ddb.local()
	}
}

export const DynamoDB = dynamoose
