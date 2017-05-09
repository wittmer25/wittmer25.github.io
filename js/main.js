
$(document).ready(function(){
    $("#email").validate({
rules: {
    email_1: {
        required: true,
        email: true
    },
},
messages: {
    email_1:{
        required: "Please enter an email address",
        email: "Please enter a valid email"
    }
}

});
});