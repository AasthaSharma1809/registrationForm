$(document).ready(function () {
  $('#registrationForm').on('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    $.ajax({
      url: 'process.php', // Backend script to handle form submission
      type: 'POST',
      data: $(this).serialize(), // Send form data
      success: function (response) {
        // Show the success modal with the response data
        $('#resultData').html(response);
        $('#resultModal').fadeIn(); // Display the modal
      },
      error: function () {
        alert('Error submitting form. Please try again.');
      }
    });
  });

  // Close the modal when the close button is clicked
  $('.close').click(function () {
    $('#resultModal').fadeOut();
  });
});
