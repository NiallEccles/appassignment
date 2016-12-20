$(document).on('pagebeforeshow', '#postlist', function(){
    setTimeout(function(){
        $.mobile.loading('show');
    },1);
});

$(document).on('pageshow', '#postlist', function(){
    setTimeout(function(){
        $.mobile.loading('hide');
    },1200);
});



function listPosts(data) {
  var output = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

  output += '<ul data-role="listview">'; /*data-filter="true" data-input="#searchposts"*/
  $.each(data.posts, function(key, val) {

    var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;


    output += '<li>';
    output += '<a href="#blogpost" onclick = "showPost(' + val.id + ')">';
    output += (val.thumbnail) ?
      '<img src="' + val.thumbnail + '" alt="' + val.title + '">':
      '<img src="images/placeholder.png" alt="CDM Logo">';
    output += '<h3>' + val.title + "</h3>";
    output += '<p>' + excerpt + "</p>";
    output += '</a>';
    output += '</li>';
  }); //go through each post
  output += "</ul>";
  $('#postlist').html(output);
} //listPosts

/*function showPost(id) {
  $.getJSON('http://www.creativedigitalmedia.ie/index.php/category/creativedigitalmedia/?json=get_post&post_id=' + id + '&callback=?', function(data) {
    var output = '<h3>' + data.post.title + '</h3>';
    output += data.post.content;
    output +='<p>'+data.post.author.name+'</p>'
    output +='<p>'+data.post.date+'</p>'
    $('#mypost').html(output);
  });
}*/

function showPost(id) {
  $.getJSON('http://www.creativedigitalmedia.ie/index.php/category/creativedigitalmedia/?json=get_post&post_id=' + id + '&callback=?', function(data) {
    var output = '<h3>' + data.post.title + '</h3>';
    output += data.post.content;
    output +='<p>'+data.post.author.name+'</p>'
    output +='<p>'+data.post.date+'</p>'
    $('#mypost').html(output);
  });
}

// EVENT PULLER

function eventPosts(data) {
  var eventoutput = '<form class="ui-filterable"><input id="searchposts" data-type="search"></form>';

  eventoutput += '<ul data-role="listview">'; /*data-filter="true" data-input="#searchposts"*/
  $.each(data.posts, function(key, val) {

    var tempDiv = document.createElement("tempDiv");
    tempDiv.innerHTML = val.excerpt;
    $("a", tempDiv).remove();
    var excerpt = tempDiv.innerHTML;


    eventoutput += '<li>';
    eventoutput += '<a href="#eventpost" onclick = "showEvent(' + val.id + ')">';
    eventoutput += (val.thumbnail) ?
      '<img src="' + val.thumbnail + '" alt="' + val.title + '">':
      '<img src="images/placeholder.png" alt="CDM Logo">';
    eventoutput += '<h3>' + val.title + "</h3>";
    eventoutput += '<p>' + excerpt + "</p>";
    eventoutput += '</a>';
    eventoutput += '</li>';
  }); //go through each post
  eventoutput += "</ul>";
  $('#eventlist').html(eventoutput);
} //listPosts

function showEvent(id) {
  $.getJSON('http://www.creativedigitalmedia.ie/index.php/category/events/?json=get_post&post_id=' + id + '&callback=?', function(data) {
    var eventoutput = '<h3>' + data.post.title + '</h3>';
    eventoutput += data.post.content;
    eventoutput +='<p>'+data.post.author.name+'</p>'
    eventoutput +='<p>'+data.post.date+'</p>'
    $('#myevent').html(eventoutput);
  });
}
