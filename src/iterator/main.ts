import BookShelf from "./BookShelf";
import Book from "./Book";
import Iterator from "./Iterator";

export default class Main {
	constructor() {
		const bookshelf: BookShelf = new BookShelf()
		bookshelf.appendBook(new Book("book1"))
		bookshelf.appendBook(new Book("book2"))
		bookshelf.appendBook(new Book("book3"))
		bookshelf.appendBook(new Book("book4"))
		const it: Iterator = bookshelf.iterator()
		let c = 0
		while (it.hasNext()) {
			const book: Book = it.next();	
			if (c % 2 != 0) {
				it.remove()
			}
			c++
		}
		console.log(bookshelf.getBookList());
	}
}
new Main();