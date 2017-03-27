<?php
// This file assumes it is being included from a quiz-specific vote handler,
// which will pass it the variable for the table name and the env var
// for the server_root.
if ( !isset($SERVER_ROOT) ) $SERVER_ROOT = '';
if ( !isset($TABLE) ) exit('');

$vote = intval($_REQUEST['vote']);
$player = htmlspecialchars($_REQUEST['player']);

require_once ($SERVER_ROOT . 'includes/php/mysql_connect_production.php')

$query = 'SELECT * FROM $TABLE WHERE name = "' . $player . '" LIMIT 1';
$result = @mysql_query($query);

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)):
	$yes = $row['keep'];
	$no = $row['dump']; 
endwhile;

if ($vote == 0):
	$value = $yes + 1;
	$verb = 'keep';
	echo $value."||".$no;
elseif ($vote == 1):
	$value = $no + 1;
	$verb = 'dump';
	echo $yes."||".$value;
endif;

$update = 'UPDATE Interactive.' . $TABLE . ' SET ' . $verb . '=' . $value . ' WHERE name = "' . $player . '" LIMIT 1';
$result = @mysql_query($update);

?>
