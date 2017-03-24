<html>


<style>
  body{
    font-family: sans-serif;
  }
  table, th, td {
    border: 1px solid #ddd;
    border-collapse: collapse;
}
th, td {
    padding: 15px;
}

table tr:nth-child(even) {
    background-color: #eee;
}
table  tr:nth-child(odd) {
    background-color: #fff;
}
table  th {
    color: white;
    background-color: black;
}
  
  </style>

<body>

<h2>2016 KNICKS KEEP 'EM DUMP OR 'EM RESULTS</h2>

<?php
  

require_once ('../../../../includes/php/mysql_connect_production.php');

$query = "select p.name as 'name', r.keep as 'keep', r.dump as 'dump' from yankees_kd_2016 r, yankees_kd_players_2016 p WHERE p.id = r.name";
$result = @mysql_query($query);
echo '<table border="1" style="width:100%">';
echo '<tr><td>PLAYER</td><td>KEEP</td><td>DUMP</td></tr>';

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)){

echo "<tr><td><br />".$row['name']."</td><td>".$row["keep"]."</td><td>".$row["dump"]."<td/></tr>";


}
$query2 = "SELECT sum(keep) as 'kt', sum(dump) as 'dt' FROM Interactive.yankees_kd_2016";
$result2 = @mysql_query($query2);
$row2 = mysql_fetch_array($result2, MYSQL_ASSOC);
echo "<tr><td>TOTAL</td><td>".$row2["kt"]."</td><td>".$row2["dt"]."<td/></tr>";
echo '</table>';

?>


</body>
</html>
