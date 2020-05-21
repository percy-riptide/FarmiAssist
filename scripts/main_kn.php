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
	file_put_contents("kannada.txt","");
	file_put_contents("kannada.txt",$var);
	$var=shell_exec('python kannada.py');
	$var=trim($var);
    $output1=shell_exec('python seeds.py "'.$var.'"');
	$output1 = trim($output1);
	$output2=shell_exec('python input.py "'.$var.'"');
	$output2 = trim($output2);
	$output3=shell_exec('python fertilizer.py "'.$var.'"');
	$output3 = trim($output3);
	$output4=shell_exec('python season.py "'.$var.'"');
	$output4 = trim($output4);
	$output5=shell_exec('python soil.py "'.$var.'"');
	$output5 = trim($output5);
	$output6=shell_exec('python weeds.py "'.$var.'"');
	$output6 = trim($output6);
	$output7=shell_exec('python yield.py "'.$var.'"');
	$output7 = trim($output7);
	$i=0;
	if($output1 != "")
		$i++;
	if($output2 == "true")
		$i++;
	if($output3 == "true")
		$i++;
	if($output4 == "true")
		$i++;
	if($output5 == "true")
		$i++;
	if($output6 == "true")
		$i++;
	if($output7 == "true")
		$i++;		
	ob_start();
	echo '{ ';
    	if($output1 != ""){
		echo '"'.'Crop'.'"'.': ';
		echo '"';
		$tr='Here are the results for your plant:     '.$output1;
		file_put_contents("english.txt","");
		file_put_contents("translated.txt","");
		file_put_contents("english.txt",$tr);
		$op=shell_exec('python english.py');
		$op=file_get_contents("translated.txt");
		if($i > 1)
			echo $op.'"'.','."\r\n";
		else
			echo $op.'"'."\r\n";
		$i--;
	}
    	if($output2 == "true"){
		$sql='select * from input where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Requirement'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["input"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
			if($i > 1)
				echo $op.'"'.','."\r\n";
			else
				echo $op.'"'."\r\n";
			$i--;
			}
	}
    	if($output3 == "true"){
		$sql='select * from fertilizers where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Fertilizer'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["fertilizers"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
				if($i > 1)
					echo $op.'"'.','."\r\n";
				else
					echo $op.'"'."\r\n";
				$i--;
			}
	}
    	if($output4 == "true"){
		$sql='select * from season where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Season'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["season"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
				if($i > 1)
					echo $op.'"'.','."\r\n";
				else
					echo $op.'"'."\r\n";
				$i--;
			}
	}
    	if($output5 == "true"){
		$sql='select * from soil where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Soil'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["soil"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
				if($i > 1)
					echo $op.'"'.','."\r\n";
				else
					echo $op.'"'."\r\n";
				$i--;
			}
	}
    	if($output6 == "true"){
		$sql='select * from weed where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Weed'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["weedcontrol"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
				if($i > 1)
					echo $op.'"'.','."\r\n";
				else
					echo $op.'"'."\r\n";
				$i--;
			}
	}
    	if($output7 == "true"){
		$sql='select * from yield where crop="'.$output1.'"';
		$result = mysqli_query($conn, $sql);
		echo '"'.'Produce'.'"'.': ';
		echo '"';
		if(mysqli_num_rows($result)>0)
			while($row = mysqli_fetch_assoc($result)){
				$tr=$row["yield"];
				file_put_contents("english.txt","");
				file_put_contents("translated.txt","");
				file_put_contents("english.txt",$tr);
				$op=shell_exec('python english.py');
				$op=file_get_contents("translated.txt");
				if($i > 1)
					echo $op.'"'.','."\r\n";
				else
					echo $op.'"'."\r\n";
				$i--;
			}
	}
	echo '}';
	$final=ob_get_clean();
	file_put_contents("final.json",trim($final));
	$conn->close();
	echo file_get_contents("final.json");
?>