import * as env from 'env-var'

export const settings = {
	NODE_ENV: env.get('NODE_ENV').required().asString(),
	AWS_NODEJS_CONNECTION_REUSE_ENABLED: env
		.get('AWS_NODEJS_CONNECTION_REUSE_ENABLED')
		.required()
		.asInt()
}
