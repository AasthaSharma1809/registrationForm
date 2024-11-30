$(document).ready(function() {
    $('#submitBtn').click(function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var dob = $('#dob').val();

        if (name && email && phone && dob) {
            $('#resultName').text('Name: ' + name);
            $('#resultEmail').text('Email: ' + email);
            $('#resultPhone').text('Phone: ' + phone);
            $('#resultDob').text('Date of Birth: ' + dob);
            $('#result').show();
        } else {
            alert('Please fill all fields.');
        }
    });

    $('#clearBtn').click(function() {
        $('#registrationForm')[0].reset();
        $('#result').hide();
    });
});
