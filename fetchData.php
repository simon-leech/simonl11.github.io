
<?php

	header("Content-type:application/json");
	
	$pgOptions = "host = 'localhost' dbname = 'WRAG' user = 'postgres' password = 'WRAG2020$$'";
	$dbconn = pg_connect($pgOptions) or die ('connection failure');

	$query = "SELECT treetype, dateadded, protectiontype, latitude, longitude FROM protectedtrees";
	$result = pg_query($dbconn, $query) or die ('Query failed: '.pg_last_error());

	$treeData = array();
	while ($row = pg_fetch_array($result, null, PGSQL_ASSOC))	{
		$treeData[] = array("id" => $row["treetype"], "date" => $row["date"], "protection" => $row["protectiontype"], "lat" => $row["latitude"], "lon" => $row["longitude"]);
	}

	echo json_encode($treeData); 

	pg_close($dbconn);

?>