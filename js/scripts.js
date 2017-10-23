$(function(){
  var flavors = ["mint chip", "cookie dough", "pistachio", "red velvet", "black sesame"];
  // var flavorId = ["#flavor-1", "#flavor-2", "#flavor-3", "#flavor-4", "#flavor-5"];
  flavors.forEach(function(flavor) {


  $("#flavor-list").append("<li>" + flavor + "</li>");

  });
});
