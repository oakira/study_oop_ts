import Print from "./Print"
import PrintBanner from "./PrintBanner"

export default class Main {
	constructor() {
		const p: Print = new PrintBanner("Hello!")
		p.printWeak()
		p.printStrong()
	}
}
new Main()