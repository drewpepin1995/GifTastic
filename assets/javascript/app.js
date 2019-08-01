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

$(document).ready(function() {

    for (var i = 0; i<actors.length; i++) {
        let actorBtns = $("<button>" + actors[i] + "</button>");
        $("#actorBtns").append(actorBtns);
        
        
    }
});