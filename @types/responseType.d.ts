declare interface IResponse<T = string> {
	statusCode: number
	body: string | T
}
