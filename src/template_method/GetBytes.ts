export default class GetBytes {
	constructor() {}
	/**
	 * getBytes
	 */
	public getBytes(str: string): number {
		const ESCAPECHAR: string = ";,/?:@&=+$ "
		const ESCAPEDLEN_TABLE: any = [0, 1, 1, 1, 2, 3, 2, 3, 4, 3];
		let size: number = 0
		let len_str = str.length
		if (str == null || str == "") {
			return size;
		}
		for (let i = 0; i < len_str; i++) {
			let c = str.charAt(i)
			if (ESCAPECHAR.indexOf(c) >= 0) {
				size++
			} else {
				size += ESCAPEDLEN_TABLE[encodeURI(c).length]
			}
		}
		return size
	}
} 