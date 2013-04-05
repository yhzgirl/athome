
(function() {
  var flickerAPI = "http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=4f04ad387b8fc014f91037b2ddf117d8&extras=url_o&per_page=5&format=json&nojsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "halifaxharbour",
    tagmode: "any",
    format: "json"
  })
  .done(function( data ) {
    $.each( data.items, function( i, item ) {
      $( "<img/>" ).attr( "src", item.media.m ).appendTo( "#images" );
      if ( i === 0 ) {
        return false;
      }
    });
  });

$(document).ready(function() {
  $('.hidden').toggle('mouseenter') function() {

});