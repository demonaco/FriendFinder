//capturing event click listener and assigning key/values for our newFriend object variable   
var survey = require("/public/survey.html")

console.log("hello!");

    $("#submitButton").on("click", function (event) {
        event.preventDefault();

        var newFriend = {
            "name": $("#nameField").val().trim(),
            "photo": $("#photoField").val().trim(),
            "scores": [$("#Q1").val(),
            $("#Q2").val(),
            $("#Q3").val(),
            $("#Q4").val(),
            $("#Q5").val(),
            $("#Q6").val(),
            $("#Q7").val(),
            $("#Q8").val(),
            $("#Q9").val(),
            $("#Q10").val()
            ]
        }

        console.log(newFriend);


        $.post("../api/friends", newFriend, function (data) {
            if (data) {
                alert("Your information has been submitted to our database")
            } else {
                alert("Sorry there was an issue, please try again")
            }

        })

        //once info is submitted to API, do comparison

        //clear our answer fields
        // $("#nameField").val("")
        // $("#photoField").val("")

    });


    //running query to get current API list of data

    // function dataQuery() {
    //     $.ajax({ url: "/api/friends", method: "GET" })
    // }.then(function (friends) {
    //     console.log(friends)
    //     console.log("------------------------------")

    //     //code to go through friends array and compare absolute difference numbers from array of data to current user who submitted answers
    //     for (var i = 0; i < friends.length; i++) {
    //         for (var j = 0; j < friends[i].scores.length; j++) {
    //             console.log(friends[i][j]);
    //         }
    //     }

    //     // var modalFriend = $("#modal-content");



    // })