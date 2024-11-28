$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'process.php',
      data: $(this).serialize(),
      success: function(response) {
        $('#result').html(response).fadeIn();
        $('#registrationForm')[0].reset(); // Clear the form
      }
    });
  });
});
