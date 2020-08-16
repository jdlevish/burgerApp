$(".burg").on("click", function (event) {
    var id = $(this).attr("data-id");

    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: { devoured: true, }
    }).then(function () {
        console.log("This burger was devoured");
        // Reload the page to get the updated list
        location.reload();
    });
})

$("#submit").on("click", function (event) {
    var name = $("#name").val()
    console.log(name)

    $.ajax({
        url: "/api/burgers",
        type: "POST",
        data: {
            name: name, devoured: 0
        }

    }).then(function () {
        console.log("you" + name + " has been added")
        location.reload();
    })
})