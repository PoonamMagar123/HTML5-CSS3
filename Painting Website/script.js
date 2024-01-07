$(document).ready(function() {
    // Load the default content (e.g., Home) when the page loads
    loadContent('home');
  
    // Handle navigation click events
    $('.nav-link').on('click', function(e) {
      e.preventDefault();
      var page = $(this).data('page');
      loadContent(page);
    });
  
    // Function to load content based on selected page
    function loadContent(page) {
      $.ajax({
        url: page + '.html', // Assume you have HTML files named "home.html", "about.html", etc.
        type: 'GET',
        dataType: 'html',
        success: function(data) {
          $('#content').html(data);
        },
        error: function() {
          $('#content').html('<p>Content not available.</p>');
        }
      });
    }
  });
  