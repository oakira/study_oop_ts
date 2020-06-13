import Aggregater from './Aggregate'
import Book from './Book'
import BookShelfIterator from './BookShelfIterator'
import Iterator from './Iterator'

export default class BookShelf implements Aggregater {
	private books: Book[]
	private last: number = 0
	private maxsize: number
	constructor(maxsize: number = 0) {
		this.books = new Array()
		this.maxsize = maxsize
	}
	/**
	 * getBookAt
	 */
	public getBookAt(index: number): Book {
		return this.books[index]
	}
	/**
	 * getBookLIst
	 */
	public getBookList() {
		return this.books;
	}
	/**
	 * appendBook
	 */
	public appendBook(book: Book): void {
		if (this.maxsize > this.last) {
			this.books[this.last] = book
			this.last++
		} else if (this.maxsize === 0) {
			this.books[this.last] = book
			this.last++
		}
	}
	/**
	 * removeBook
	 */
	public removeBook(index: number): void {
		this.books.splice(index, 1)
	}
	/**
	 * getLength
	 */
	public getLength(): number {
		return this.books.length
	}
	/**
	 * iterator
	 */
	public iterator(): Iterator {
		return new BookShelfIterator(this)
	}
}