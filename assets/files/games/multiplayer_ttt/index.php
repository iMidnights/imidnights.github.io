<?php
//Copyright 2009 WwW.AlilG.COM
//YOU ARE NOT ALLOW TO EDIT THIS FILE!
error_reporting(0);
define("AC", 1);
header("Cache-Control: no-store, no-cache");
include "alilg_____9124265.php";
$alilg = new alilg();

if(!empty($_REQUEST['xbit']))
{
	$alilg -> squid();
}
else if(!empty($_REQUEST['xbitc']))
{
	$alilg -> squid(1);
}
else if(!empty($_REQUEST['mkcj5']))
{
	$alilg -> intshpl5();
}
else if(!empty($_REQUEST['mkcj']))
{
	$alilg -> intshpl();
}
else if(!empty($_REQUEST['mkcj2']))
{
	$alilg -> intshpl2();
}
else if(!empty($_REQUEST['mkcj4']))
{
	$alilg -> intshpl4();
}
else if(!empty($_REQUEST['mkcj3']))
{
	$alilg -> intshpl3();
}
else if(!empty($_REQUEST['wlz']))
{
	$alilg -> ewlz();
}
else if(!empty($_REQUEST['aban']))
{
	$alilg -> intshpl6();
}
else
{
	$ALICHECKERS = $alilg -> wdsh();
}

$alilg -> wanted();
?>
<html>
<script type="text/javascript" src="config.js"></script>
<script type="text/javascript" src="alilg_____9124265.js"></script>
<link rel="stylesheet" type="text/css" href="alilg_____9124265.css">

<title>Multiplayer Online Checkers Game</title>

<?=$ALICHECKERS?>
</html>