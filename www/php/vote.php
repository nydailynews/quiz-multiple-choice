<?php
$vote = intval($_REQUEST['vote']);
$player = htmlspecialchars($_REQUEST['player']);

require_once ('../../../../includes/php/mysql_connect_production.php')

$query = "SELECT * FROM giants_kd_2016 WHERE name = ".$player;
$result = @mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){    
  $yes = $row['keep'];
  $no = $row['dump']; 


}

if ($vote == 0) {
  $yes = $yes + 1;
  $update = "UPDATE Interactive.giants_kd_2016 SET keep=".$yes." WHERE name = ".$player;
  $result = @mysql_query($update);
}
if ($vote == 1) {
  $no = $no + 1;
  $update = "UPDATE Interactive.giants_kd_2016 SET dump=".$no." WHERE name = ".$player;
  $result = @mysql_query($update);
}

echo $yes."||".$no;

?>
