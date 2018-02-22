// change navigation on button click
console.log("finally firing");
$(document).ready(function() {
  $("#chooseNavStyle")
    .find("button")
    .on("click", function() {
      console.log("firing");
      $(this)
        .toggleClass("active")
        .siblings()
        .removeClass("active");
      let text = $(this)
        .text()
        .toLowerCase();
      console.log(text, "this is text");
      $("nav")
        .removeAttr("class")
        .attr("class", text);
    });
});
