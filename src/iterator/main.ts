import BookShelf from "./BookShelf";
import Book from "./Book";
import Iterator from "./Iterator";

export default class Main {
	constructor() {
		const bookshelf: BookShelf = new BookShelf(4)
		bookshelf.appendBook(new Book("book1"))
		bookshelf.appendBook(new Book("book2"))
		bookshelf.appendBook(new Book("book3"))
		bookshelf.appendBook(new Book("book4"))
		const it: Iterator = bookshelf.iterator()
		while (it.hasNext()) {
			const book: Book = it.next();
			console.log(book.getName());
		}
	}
}
new Main();