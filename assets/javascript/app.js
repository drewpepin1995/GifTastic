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

    $(actorBtns).on("click", function(event){
        console.log(event);
    });

    

    

    
});