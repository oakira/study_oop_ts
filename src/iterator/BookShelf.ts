import Aggregater from './Aggregate'
import Book from './Book'
import BookShelfIterator from './BookShelfIterator'
import Iterator from './Iterator'

export default class BookShelf implements Aggregater {
	private books: Book[]
	private last: number = 0

	constructor(maxsize: number) {
		this.books = new Array(maxsize)
	}
	/**
	 * getBookAt
	 */
	public getBookAt(index: number): Book {
		return this.books[index]
	}
	/**
	 * appendBook
	 */
	public appendBook(book: Book): void {
		this.books[this.last] = book
		this.last++
	}
	/**
	 * getLength
	 */
	public getLength(): number {
		return this.last
	}
	/**
	 * iterator
	 */
	public iterator(): Iterator {
		return new BookShelfIterator(this)
	}
}