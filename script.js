
function fetchData()	{
	console.log("trying to fetch data");
	//Define array to hold results returned from server
	treeData = new Array();
	
	//AJAX request to server; accepts a URL to which the request is sent 
	//and a callback function to execute if the request is successful. 
	$.getJSON("fetchData.php", function(results)	{ 
		console.log("fetchDATA geojson occurring");
		//Populate tweetData with results
		for (var i = 0; i < results.length; i++ )	{
			
			treeData.push ({
				id: results[i].treetype, 
				protection: results[i].protectiontype, 
				date: results[i].date,
				lat: results[i].latitude, 
				lon: results[i].longitude
			}); 
		}
		
		writeTweets(); 
	});
	
	function writeTweets()	{	
		console.log ("TRYING TO WRITE DATA");
		for (var i = 0; i< treeData.length; i++)	{ 
			document.getElementById('textWrap').innerHTML += 
			"id = " + treeData[i].treetype + ", text = " + treeData[i].protection + ", Date= " + treeData[i].date +
			", coordinates = " + treeData[i].lat + ", " + treeData[i].lon + "<br />"; 			
		}
	}
}

function clearData()	{
	document.getElementById('textWrap').innerHTML = 'SOMETHING HAPPENED'; 
	console.log("data cleared");
}
		
	
	