export default abstract class AbstractDisplay {
	abstract open(): void
	abstract print(): void
	abstract close(): void
	/**
	 * display
	 */
	public display(): void {
		this.open()
		for (let i: number = 0; i < 5; i++) {
			this.print()
		}
		this.close()
	}
}