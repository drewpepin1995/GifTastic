$(document).ready(function () {




  let actors = [
    "Vince Vaughn",
    "Will Ferrell",
    "Adam Sandler",
    "Brad Pitt",
    "Owen Wilson",
    "Bradley Cooper",
    "David Spade",
    "Chris Rock",
    "Nicolas Cage",
    "Denzel Washington",
    "Chris Evans",
    "Ben Affleck",
    "Taylor Kitsch",
    "Chris Farley",
    "Chris Rock",
    "Zac Efron",
    "Michael B Jordan",
    "David Spade"

  ]


  function renderActors() {
    for (var i = 0; i < actors.length; i++) {
      let actorBtns = $("<button>" + actors[i] + "</button>").addClass(actors[i]).addClass("actor");
      $("#actorBtns").append(actorBtns);

    };

  };



  function newActorButton() {
    let newActor = $("#actorForm").val();
    let newButton = $("<button>").addClass(newActor).addClass("newActor")

    let newActorButton = newButton.text(newActor)
    $("#actorBtns").append(newActorButton);
    $("#actorForm").val('');
  }



  function animateImage() {
    $("img").on("click", function () {
      let state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }

    });
  }





  function renderNewActors() {
    let actorLength = $("#actorForm").val();
    if (actorLength.length < 8) {
      alert("Please enter an actor!")

    } else {
      actors.push($("#actorForm").val());

      newActorButton();
      $(".newActor").on("click", function () {
        $("#gifDiv").empty();

        var actor = $(this).attr("class");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          actor + "&api_key=fWfICpURY2bv4yIJEwHUvj6IhgVd2LmX&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function (response) {
            var results = response.data;


            for (var i = 0; i < results.length; i++) {
              var gifDiv = $("<div>");

              var rating = results[i].rating;

              var p = $("<p>").text("Rating: " + rating);

              let animated = results[i].images.fixed_height.url;
              let still = results[i].images.fixed_height_still.url;

              var personImage = $("<img>");
              personImage.attr("src", still);
              personImage.attr("data-still", still)
              personImage.attr("data-animate", animated)
              personImage.attr("data-state", "still");
              personImage.addClass("actor-image");

              gifDiv.append(p);
              gifDiv.append(personImage);
              gifDiv.addClass('gifImageDiv')

              $("#gifDiv").append(gifDiv);

              console.log(response);
            };

            animateImage();


          });

      });
    };


  };







  function actorClick() {


    $(".actor").on("click", function () {
      $("#gifDiv").empty();

      var actor = $(this).attr("class");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        actor + "&api_key=fWfICpURY2bv4yIJEwHUvj6IhgVd2LmX&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
          var results = response.data;


          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            let animated = results[i].images.fixed_height.url;
            let still = results[i].images.fixed_height_still.url;

            var personImage = $("<img>");
            personImage.attr("src", still);
            personImage.attr("data-still", still)
            personImage.attr("data-animate", animated)
            personImage.attr("data-state", "still");
            personImage.addClass("actor-image");

            gifDiv.append(p);
            gifDiv.append(personImage);
            gifDiv.addClass('gifImageDiv')

            $("#gifDiv").append(gifDiv);

            console.log(response);
          };

          animateImage();


        });

    });

  };





  renderActors();

  $("#addButton").on("click", function () {

    renderNewActors();


  });



  actorClick();

});