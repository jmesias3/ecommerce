// hide alert
$("#closeAlert").click(function(){
    $("#topAlert").hide();
});



// show on click full name error
$("#modalSubmit").click(function(){
    
    // stores full name input as Name
    var Name = $("#fullName").val();
    
    // if Name is empty
    if (Name === "") {

    // shows the error message
    $("#modalNameError").show();
    }

    // stores full name input as Name
    var Email = $("#email").val();
    
    // if Email is empty
    if (Email === "") {

    // shows the error message
    $("#modalEmailError").show();
    }



    // if both forms are filled, adds completion message
    else {
        $("#completionMessage").append('<p id="completionMessage">Thank you ' + Name + '!</p>');
        // $("#completionMessage").show();
    }

});