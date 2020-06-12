export default class Book  {
	private name: string
	constructor(name: string) {
		this.name = name
	}
	/**
	 * getName
	 */
	public getName(): string {
		return this.name
	}
}