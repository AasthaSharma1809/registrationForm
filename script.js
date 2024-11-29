$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    $.ajax({
      url: 'process.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function (response) {
        if (response === 'success') {
          $('#successModal').fadeIn(); // Show success modal
        } else {
          alert('Error submitting form. Please fill all fields correctly.');
        }
      },
      error: function () {
        alert('Error submitting form. Please try again.');
      }
    });
  });

  // Close modal
  $('.close').on('click', function () {
    $('#successModal').fadeOut();
  });
});
