$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    $.ajax({
      url: 'process.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (response) {
        if (response === 'success') {
          $('#registrationForm').hide(); // Hide form after successful submission
          $('#successMessage').removeClass('hidden').fadeIn(); // Show success message
        } else {
          alert('Error submitting form. Please try again.');
        }
      },
      error: function () {
        alert('Error submitting form. Please try again.');
      }
    });
  });
});
