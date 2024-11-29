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
          $('.modal-content p').text('Thank you for registering. 😊 Your registration was successful!');
        } else {
          alert('Error submitting form. Please try again.');
        }
      },
      error: function () {
        alert('Error submitting form.');
      }
    });
  });

  // Close modal when clicking on the "close" button or outside the modal
  $('.close, .modal').on('click', function () {
    $('#successModal').fadeOut();
  });

  // Prevent modal content click from closing the modal
  $('.modal-content').on('click', function (e) {
    e.stopPropagation();
  });
});
