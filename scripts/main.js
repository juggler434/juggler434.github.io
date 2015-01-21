$( "li" ).hover(
  function() {
    var children = $(this).children()
    $(children).show();
  }, function() {
    $( this ).find( "img" ).hide();
  }
);