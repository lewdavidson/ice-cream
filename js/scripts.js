$(function(){
  var flavors = ["mint chip", "cookie dough", "pistachio", "red velvet", "black sesame"];
  flavors.forEach(function(flavor) {


  $("#flavor-list").append("<li>" + flavor + "</li>");

  });
});
