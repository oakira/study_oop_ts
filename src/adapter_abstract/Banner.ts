export default class Banner {
	private string: string
	constructor(string: string) {
		this.string = string
	}
	/**
	 * showWithParan
	 */
	public showWithParan(): void {
		console.log('(' + this.string + ')')
	}
	/**
	 * showWithAster
	 */
	public showWithAster(): void {
		console.log('*' + this.string + '*')
	}
}