var today = new Date();
var currentTime = today.getHours();
var greeting;


if (currentTime > 18) {
greeting = 'Good evening';
}
else if (currentTime > 12) {
greeting = 'Good afternoon';
}
else if (currentTime > 0) {
	greeting = 'Good morning';
}
else{
	greeting = 'Hey there'
}
document.write(greeting);