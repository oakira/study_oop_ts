import AbstractDisplay from "./AbstractDisplay"
import CharDisplay from "./CharDisplay"
import StringDisplay from "./StringDisplay"

export default class Main {
	constructor() {
		let d1: AbstractDisplay = new CharDisplay('H')
		let d2: AbstractDisplay = new StringDisplay('Hello,World.')
		let d3: AbstractDisplay = new StringDisplay('こんにちは。')
		d1.display()
		d2.display()
		d3.display()
	}
}
new Main()