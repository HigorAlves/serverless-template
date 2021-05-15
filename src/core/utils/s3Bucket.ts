import AWS from 'aws-sdk'

export function S3(): AWS.S3 {
	const host = process.env.LOCALSTACK_HOST || 'localhost'
	const s3port = process.env.S3_PORT || '4566'
	const s3config = {
		s3ForcePathStyle: true,
		endpoint: new AWS.Endpoint(`http://${host}:${s3port}`)
	}

	if (process.env.NODE_ENV === 'local') {
		return new AWS.S3(s3config)
	}

	return new AWS.S3()
}
