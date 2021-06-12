//WARNING
//DO NOT GO CRAZY!
//CHANGE THESE VALUES, DEPEND ON YOUR WEB SERVER RESIOURSES ONLY!
//IF YOU DO NOT HAVE ENOFF INFORMATION ABOUT YOUR WEB SERVER RESOURCES, DO NOT CHANGE IT.

//Maximum Online Players Number
//This value can not be lower then 2 and higher then 50 users.
//Default normal value is 10.
$MAXONLINEPL = 10;


//GAMESPEED mean time delay between check for new move from a players opponent in seconds!
//This value can not be lower then 3 and more then 9 seconds.
//Default normal value is 3.
$GAMESPEED = 5;


//TIMEOUT IN SECONDS
$TIMEOUT = 30;


//REQUEST TIMEOUT IN SECONDS
//THIS CAN NOT BE LOWER THEN GAME SPEED
$REQUEST_TIMEOUT = 15;



//SERVER SIDE DEBUG
// 1 = ON 
// 0 = OFF
$SERVERSIDE_DEBUG = 0;

//DEBUGGER TYPE
// 1 = SHOW LATEST RESPONSE ONLY
// 2 = DISPLAY ALL RESPONSE FROM FIRST TO LAST
$SERVERSIDE_DEBUG_TYPE = 1;