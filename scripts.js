$(function(){ 

 // form to create new rant
 var $myBlog = $('#save-book');
  // underscore template
 var template = _.template($("#blog-template").html());
 // element to hold our list of rants
 var $blogSpot = $('.newBlog');

// constructor for rant
function Blog (userName, rant) {
  this.userName = userName;
  this.rant = rant;
};

//holds all new instances of Rant
Blog.all = [];

//saves all new rants to the array 
Blog.prototype.save = function(){
  Blog.all.push(this);
  console.log(this);
};

//renders underscore template
Blog.prototype.render = function() {
  var $rant = $(template(this))
  $blogSpot.append($myBlog)
  console.log("suck it twice"); 
}

  // submit form to create new todo
    $myBlog.on('submit', function(event) {
     event.preventDefault();  
     console.log("yeap")
    // create new rants object from form data
    var newAuthor = $('#author').val();
    var newRant = $("#rant").val();
    var myBlog = new Blog(newAuthor, newRant);
    
    //saves rant
    myBlog.save();

    //render rant
    myBlog.render();

   //  // reset the form
   // $myBlog[0].reset();


    });


});

























