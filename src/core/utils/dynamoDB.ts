import * as https from 'https'

import * as dynamoose from 'dynamoose'

// Improve DynamoDB latency by enabling HTTP keepAlive
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/node-reusing-connections.html
let httpAgent = new https.Agent({
	rejectUnauthorized: true,
	keepAlive: true
})

if (!process.env.IS_LOCAL) {
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

if (process.env.IS_LOCAL) {
	httpAgent = undefined
}

if (process.env.IS_LOCAL) dynamoose.aws.ddb.local()

export const DynamoDB = dynamoose
