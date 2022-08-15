
function myFunction() {
    alert("sorry! search invalid ");
}

//Make the DIV element draggagle:
$(document).ready(function () {

    $("#Sky9Students").draggable();

    // $("#Sky9").droppable({
    //     accept: "#Sky9Students",
    //     drop: function (event, ui) {
    //         $(this).addClass("MyCls").find("p").html("perfect...");

    //     }
    // });

});