$(function() {

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		alert("clicked");
		console.log("clicked");

	var newBurger = {
		burger_name: $("#burger-type").val().trim(),

	};

    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
	});

});