const serverless = new (require('serverless'))()

module.exports = async () => {
	await serverless.init()
	const service = await serverless.variables.populateService()
	const resources = service.resources.Resources

	const tables = Object.keys(resources)
		.map(name => resources[name])
		.filter(r => r.Type === 'AWS::DynamoDB::Table')
		.map(r => r.Properties)
	return {
		tables,
		port: 8000
	}
}
