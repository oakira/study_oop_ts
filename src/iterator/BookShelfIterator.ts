import Iterator from './Iterator';
import BookShelf from './BookShelf';
import Book from './Book';

export default class BookShelfIterator implements Iterator {
	private bookshelf: BookShelf
	private index: number;

	constructor(bookshelf: BookShelf) {
		this.bookshelf = bookshelf
		this.index = 0
	}

	hasNext(): boolean {
		if (this.index < this.bookshelf.getLength()) {
			return true;
		} else {
			return false;
		}
	}

	next(): any {
		const book: Book = this.bookshelf.getBookAt(this.index);
		this.index++;

		return book;
	}
}