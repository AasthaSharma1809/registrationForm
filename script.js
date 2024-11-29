$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing page

    $.ajax({
      url: 'process.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (response) {
        if (response.trim() === 'success') {
          $('#successModal').fadeIn(); // Show modal
          $('#registrationForm')[0].reset(); // Clear form
        } else {
          alert('Error submitting form. Please try again.');
        }
      },
      error: function () {
        alert('Error submitting form.');
      }
    });
  });

  // Close modal
  $('.close').on('click', function () {
    $('#successModal').fadeOut();
  });
});
