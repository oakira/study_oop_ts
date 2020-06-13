import Banner from "./Banner";
import Print from "./Print";

export default class PrintBanner extends Print {
	private banner:Banner
	constructor(string: string) {
		super()
		this.banner = new Banner(string)
	}
	/**
	 * printWeak
	 */
	public printWeak(): void {
		this.banner.showWithParan()
	}
	/**
	 * printStrong
	 */
	public printStrong(): void {
		this.banner.showWithAster()
	}
}