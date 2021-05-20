// Custom map for serverless-split-stack plugin

// Original from:
// https://github.com/dougmoscrop/serverless-plugin-split-stacks/blob/master/lib/migration-strategy/per-type.js
const CUSTOM_STACKS_MAP_BY_TYPE = {
	'AWS::CloudWatch::Alarm': {
		destination: 'Alarms',
		allowSuffix: true
	},
	'AWS::Logs::MetricFilter': {
		destination: 'Filters',
		allowSuffix: true
	},
	'AWS::Logs::SubscriptionFilter': {
		destination: 'Filters',
		allowSuffix: true
	},
	// NOTE: API Gateway shoud stay on root stack for serverless-domain-manager plugin
	//   'AWS::ApiGateway::Resource': {
	//     destination: 'API'
	//   },
	//   'AWS::ApiGateway::RestApi': {
	//     destination: 'API'
	//   },
	'AWS::Lambda::Version': {
		destination: 'Versions'
	},
	'AWS::Lambda::Permission': {
		destination: 'Permissions'
	},
	'AWS::SNS::Subscription': {
		destination: 'Subscriptions'
	},
	'AWS::SNS::TopicPolicy': {
		destination: 'Policies'
	},
	'AWS::S3::BucketPolicy': {
		destination: 'Policies'
	},
	'AWS::SQS::QueuePolicy': {
		destination: 'Policies'
	}
}

module.exports = resource => {
	const migration = CUSTOM_STACKS_MAP_BY_TYPE[resource.Type]

	// returns
	//   - false -> "keep on root stack"
	//   - undefined (or no returns) -> "fallback to default maps"
	return migration || false
}
