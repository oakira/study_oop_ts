import Banner from "./Banner";
import Print from "./Print";

export default class PrintBanner extends Banner implements Print {
	constructor(string: string) {
		super(string)
	}
	/**
	 * printWeak
	 */
	public printWeak(): void {
		this.showWithParan()
	}
	/**
	 * printStrong
	 */
	public printStrong(): void {
		this.showWithAster()
	}
}