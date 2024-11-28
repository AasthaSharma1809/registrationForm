$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'process.php',
      data: $(this).serialize(),
      success: function(response) {
        $('#resultData').html(response);
        $('#resultModal').fadeIn();
        $('#registrationForm')[0].reset(); // Clear the form
      }
    });
  });

  $('.close').click(function() {
    $('#resultModal').fadeOut();
  });
});
