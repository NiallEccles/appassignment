//demo for dynamic musicapp from PHP and JSON


$(document).ready(function() {
  getData();
});


function getData() {


		$.getJSON("http://www.creativedigitalmedia.ie/index.php/category/creativedigitalmedia/?json=1s", function(data) {
		$.mobile.showPageLoadingMsg();

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
			var  poststitle = data[i].posts[i].title;
      var  count = data[i].count;
 			var  status = data[i].status;



 			//lets write the list
 			var listEntry = "<li><a href='"+title+"'><img src='"+image+"' /><h3>"+posts[i].title+"</h3><p>Role: "+count+"</p></a></li>";

 			$("#newsList").append(listEntry);
 			$("#newsList").listview("refresh");

        }

        // all loaded, so hide the spinner
       $.mobile.hidePageLoadingMsg();
    });
}//end getData function
