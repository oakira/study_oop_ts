import Iterator from './Iterator'

export default interface Aggregater {
	iterator(): Iterator
}