<?php
	include 'connection.php';
	$conn = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);
	if (!$conn) {
	  die("Connection failed: " . mysqli_connect_error());
	}
	file_put_contents("stringdata.txt","");
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);
	$var = $obj['string'];
   	//$var="what are the fertilizers used for chilli weeds,season,soil associated with it";
    	$output1=shell_exec('python seeds.py "'.$var.'"');
	$output1 = trim($output1);
	$output2=shell_exec('python diseases.py "'.$var.'"');
	$output2 = trim($output2);
	$output3=shell_exec('python fertilizer.py "'.$var.'"');
	$output3 = trim($output3);
	$output4=shell_exec('python season.py "'.$var.'"');
	$output4 = trim($output4);
	$output5=shell_exec('python soil.py "'.$var.'"');
	$output5 = trim($output5);
	$output6=shell_exec('python weeds.py "'.$var.'"');
	$output6 = trim($output6);
	ob_start();
    	if($output1 != ""){
		$sql='select * from crop where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Crop ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["CropDescrip"]."\r\n";}
    	if($output2 == "true"){
		$sql='select * from diseases where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Diseases ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["DiseaseDescrip"]."\r\n";}
    	if($output3 == "true"){
		$sql='select * from fertilizers where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Fertilizer ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["QuantityDescrip"]."\r\n";}
    	if($output4 == "true"){
		$sql='select * from season where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Season ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["SeasonDescrip"]."\r\n";}
    	if($output5 == "true"){
		$sql='select * from soil where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Soil ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["SoilDescrip"]."\r\n";}
    	if($output6 == "true"){
		$sql='select * from weed where cropname="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo 'Weeds ';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result))
				echo $row["WeedManagementDes"]."\r\n";}
	$final=ob_get_clean();
	file_put_contents("stringdata.txt",trim($final));
	$conn->close();
	file_put_contents("final.json","");
	shell_exec('python stringtojsondict.py');
	echo file_get_contents("final.json");
?>