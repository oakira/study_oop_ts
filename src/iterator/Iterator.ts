export default interface Iterator {
	hasNext(): boolean
	next(): any
	remove(): void
}