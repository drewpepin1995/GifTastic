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
    "Taylor Kitsch"

]


function renderActors () {
    for (var i = 0; i<actors.length; i++) {
        let actorBtns = $("<button>" + actors[i] + "</button>").addClass(actors[i]);
        $("#actorBtns").append(actorBtns);

};
       
};




$(document).ready(function() {

    renderActors();

    $("#addButton").on("click", function(){
       
        if ($("#actorForm").val() === ('')) {
            alert("Please enter an actor!")

        } else {
        actors.push($("#actorForm").val());
        let newActor = $("#actorForm").val();
        let newButton = $("<button>").addClass(newActor);
        
        let newActorButton = newButton.text(newActor);
        $("#actorBtns").append(newActorButton);
        $("#actorForm").val('');
        };

        
    });


    $("button").on("click", function() {
        var actor = $(this).attr("class");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          actor + "&api_key=fWfICpURY2bv4yIJEwHUvj6IhgVd2LmX";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
           var results = response.data;
           
                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var personImage = $("<img>");
                    personImage.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(personImage);

                    $("#gifDiv").prepend(gifDiv);

                    console.log(response);
            };

          });

      });

    

    

    
});