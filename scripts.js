
// constructor for blog
function Blog(title, author, postDate, content) {
  this.title = title;
  this.author = author;
  this.postDate = postDate;
  this.content = content;

  this.items = localStorage.getItem("blogs");
  this.key = "blogs";
  this.items_json = JSON.parse(this.items);
}

// render function to fill out information to blog
function SaveRender() {}

SaveRender.prototype.saveToLs = function(obj) {
  var item = this.items_json;
  if (this.items) {
    item = JSON.parse(this.items);
  } else {
    item = [];
  }

  item.push(obj);
  localStorage.setItem(this.key, JSON.stringify(item));
}

SaveRender.prototype.renderTemplate = function(template_source, where) {
  // var items_json = JSON.parse(this.items);
  var template = _.template($(template_source).html());

  _.each(this.items_json, function(item) {
    $(where).append(template(item));
  });
}

Blog.prototype = new SaveRender();
Blog.prototype.constructor = Blog;

var myBlog = new Blog("Tryna figure this out", "Paul Kim", "2015-07-02","I can't seem to figure this stuff out.");

myBlog.saveToLs(myBlog);

myBlog.renderTemplate("#blog-template", "#blog-container");









