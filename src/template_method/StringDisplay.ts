import AbstractDisplay from "./AbstractDisplay";
import GetBytes from "./GetBytes";

export default class StringDisplay extends AbstractDisplay {
	private string: string
	private width: number
	constructor(string: string) {
		super()
		let getbytes = new GetBytes()
		this.string = string
		this.width = getbytes.getBytes(string)
	}
	/**
	 * open
	 */
	public open(): void {
		this.printLine()
	}
	/**
	 * print
	 */
	public print() {
		console.log('(' + this.string + ')')
	}
	/**
	 * close
	 */
	public close() {
		this.printLine()
	}
	private printLine(): void {
		console.log('+');
		for (let i = 0; i < this.width; i++) {
			console.log('-');
		}
		console.log('+');
	}
}