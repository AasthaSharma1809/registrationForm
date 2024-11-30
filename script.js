$(document).ready(function() {
    $('#submitBtn').click(function() {
        $('#resultName').text('Name: ' + $('#name').val());
        $('#resultEmail').text('Email: ' + $('#email').val());
        $('#resultPhone').text('Phone: ' + $('#phone').val());
        $('#resultAddress').text('Address: ' + $('#address').val());
        $('#resultGender').text('Gender: ' + $('#gender').val());
        $('#result').show();
    });

    $('#clearBtn').click(function() {
        $('#registrationForm')[0].reset();
        $('#result').hide();
    });
});
