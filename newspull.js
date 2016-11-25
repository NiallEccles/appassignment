//demo for dynamic musicapp from PHP and JSON


$(document).ready(function() {
  getData();
});


function getData() {


		$.getJSON("http://www.creativedigitalmedia.ie/index.php/category/creativedigitalmedia/?json=1", function(data) {
		$.mobile.showPageLoadingMsg();
alert("hello");
        /*
        "data" contains the array of music data.
        Each element in the array is an object containing the ID, artist, album name, album image and URL.
        */

        // if there are no records in the database, display an error
        if(data.length == 0)
        {
			alert("Ohh errr....this is embarrassing!");
        }


        // Add a item to the list view for each item in the data array
        for(var i = 0; i < data.length; i++)
        {

            //get the band details
			var  title = data[i].title;
      var  count = data[i].count;
 			var  status = data[i].status;
      var  id = data[i].id;
      var content = data[i].content;



 			//lets write the list
 			var listEntry = "<li><a href='"+title+"'><img src='"+image+"' /><h3>Hello"+title+"</h3><p>Role: "+id+"</p><p>"+content+"</p></a></li>";

 			$("#newsList").append(listEntry);
 			$("#newsList").listview("refresh");

        }

        // all loaded, so hide the spinner
       $.mobile.hidePageLoadingMsg();
    });
}//end getData function
