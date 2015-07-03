
// constructor for blog
function Blog(title, author, postDate, image, content) {
  this.title = title;
  this.author = author;
  this.postDate = postDate;
  this.image = image;
  this.content = content;

  this.items = localStorage.getItem("blogs");
  this.key = "blogs";
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

Blog.prototype = new SaveRender();
Blog.prototype.constructor = Blog;

var myBlog = new Blog("Tryna figure this out", "Paul Kim", "2015-07-02", "https://38.media.tumblr.com/tumblr_manpcrm67D1qae69do1_250.gif","I can't seem to figure this stuff out.");

myBlog.saveToLs(myBlog);

myBlog.renderTemplate("#blog-template", "#bloh-container");









