$(function() {

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: "1"
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        location.reload();
      }
    );
  });

	$(".create-form").on("submit", function(event) {

    event.preventDefault();
    burgerName = $("#burger-type").val().trim();
    console.log(burgerName);
    var newBurger = {
      burger_name: $("#burger-type").val().trim()

    };


    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

});