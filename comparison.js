function Book(title, author, release_date, image) {
	this.title = title;
	this.author = author;
	this.release_date = release_date;
	this.image = image;

	this.items = localStorage.getItem("books");
	this.key = "books";
}

function SaveRender() {}

SaveRender.prototype.saveToLs = function(obj) {
	if (this.items) {
		items_json = JSON.parse(this.items);
	} else {
		items_json = [];
	}

	items_json.push(obj);

	localStorage.setItem(this.key, JSON.stringify(items_json));
}

SaveRender.prototype.renderTemplate = function(template_source, where) {
	var items_json = JSON.parse(this.items);

	var template = _.template($(template_source).html());

	_.each(items_json, function(item) {
		$(where).append(template(item));
	});
}

Book.prototype = new SaveRender();
Book.prototype.constructor = Book;

var myBook = new Book("Arun's Book", "Arun Sood", "Today", "http://1.bp.blogspot.com/-qJA7dW3W-M0/VH4l2LQUIEI/AAAAAAAAACo/ZJqeqHgpmBs/s1600/books.png");
myBook.saveToLs(myBook);

myBook.renderTemplate("#book-template", "#book-container");













