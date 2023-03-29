/* ----------------------------------- Countdown (Openning Game): Start ----------------------------------- */
// Date of the Next Match
var nextMatchDate = new Date("May 6, 2023 12:00:00").getTime();

// Update T0 every 1 second
var update = setInterval(function() {
	// Present: Time and Date
	var now = new Date().getTime();
	
	// Time to Next Match
	var remainingTime = nextMatchDate - now;
			
	// Remaining Time (Days, Hours, Minutes and Seconds)
	var days = Math.floor(remainingTime/(1000*60*60*24));
	var hours = Math.floor(((remainingTime/(1000*60*60*24))-days)*24);
	var minutes = Math.floor((((remainingTime/(1000*60*60*24))-days)*24-hours)*60);
	var seconds = Math.floor((((((remainingTime/(1000*60*60*24))-days)*24-hours)*60)-(minutes))*60);

	// Output Countdown
	document.getElementById("countDown1").innerHTML = days + " DAYS | " + hours + " HOURS | " + minutes + " MINUTES | " + seconds + " SECONDS";
	document.getElementById("countDown2").innerHTML = days + " DAYS | " + hours + " HOURS | " + minutes + " MINS | " + seconds + " SECS"; 

	// Countdown Expiration
	if(remainingTime<0){
		clearInterval(update);
		document.getElementById("countDown1").innerHTML = "Now Playing (Watch Live Stream)";
		document.getElementById("countDown2").innerHTML = "Now Playing (Watch Live Stream)";
	}
},1000);
/* ----------------------------------- Countdown (Openning Game): End ----------------------------------- */

/* ----------------------------------- Countdown (Registration Deadline): Start ----------------------------------- */
// Date of the Next Match
var registrationDeadline = new Date("April 10, 2023 23:59:00").getTime();

// Update T0 every 1 second
var update = setInterval(function() {
	// Present: Time and Date
	var now = new Date().getTime();
	
	// Time to Next Match
	var remainingTime = registrationDeadline - now;
			
	// Remaining Time (Days, Hours, Minutes and Seconds)
	var days = Math.floor(remainingTime/(1000*60*60*24));
	var hours = Math.floor(((remainingTime/(1000*60*60*24))-days)*24);
	var minutes = Math.floor((((remainingTime/(1000*60*60*24))-days)*24-hours)*60);
	var seconds = Math.floor((((((remainingTime/(1000*60*60*24))-days)*24-hours)*60)-(minutes))*60);

	// Output Countdown
	document.getElementById("countDown3").innerHTML = days + " DAYS | " + hours + " HOURS | " + minutes + " MINUTES | " + seconds + " SECONDS";
	document.getElementById("countDown4").innerHTML = days + " DAYS | " + hours + " HOURS | " + minutes + " MINS | " + seconds + " SECS"; 

	// Countdown Expiration
	if(remainingTime<0){
		clearInterval(update);
		document.getElementById("countDown3").innerHTML = "Registration Period Passed";
		document.getElementById("countDown4").innerHTML = "Registration Period Passed";
	}
},1000);
/* ----------------------------------- Countdown (Registration Deadline): End ----------------------------------- */

/* ----------------------------------- Menu Bar: Start ----------------------------------- */
function openMenu() {
	document.getElementById("sideMenu").style.right = "0px";
	document.getElementById("sideMenu").style.display= "block";
	document.getElementById("barIcon").style.display = "none";
}
function closeMenu() {
	document.getElementById("sideMenu").style.right = "-200px";
	document.getElementById("sideMenu").style.display= "none";
	document.getElementById("barIcon").style.display = "block";
}
/* ----------------------------------- Menu Bar: End ----------------------------------- */

/* ----------------------------------- Match Schedule Week Tabs: Start ----------------------------------- */
var tabWeeks = document.getElementsByClassName("tab-link");
var pageWeeks = document.getElementsByClassName("tab-content");

function openTab(w) {
	for(tabWeek of tabWeeks){
		tabWeek.classList.remove("active-link");
	}
	for(pageWeek of pageWeeks){
		pageWeek.classList.remove("active-week");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(w).classList.add("active-week");
}
/* ----------------------------------- Match Schedule Week Tabs: End ----------------------------------- */

/* ----------------------------------- FAQ: Start ----------------------------------- */
var answers = document.getElementsByClassName("answers");
function showAnswer(a) {
	for(answer of answers){
		answer.classList.remove("active-answer");
	}
	document.getElementById(a).classList.add("active-answer");
}
/* ----------------------------------- FAQ: End ----------------------------------- */

/* ----------------------------------- Contact Us: Start ----------------------------------- */
function matchCheck1() {
	var email1BS = document.forms["contact-form-big-screen"]["inquirerEmail-big-screen"];
	var email2BS = document.forms["contact-form-big-screen"]["inquirerEmailCheck-big-screen"];
	var messageStatus1 = document.getElementById("msgStatus-big-screen");

	if(email1BS.value == email2BS.value) {
		return true;
	} else {
		messageStatus1.innerHTML = "Error: Emails must match";
		return false;
	}
}
function matchCheck2() {
	var emails1SMS = document.forms["contact-form-small-medium-screen"]["inquirerEmail-small-medium-screen"];
	var emails2SMS = document.forms["contact-form-small-medium-screen"]["inquirerEmailCheck-small-medium-screen"];
	var messageStatus2 = document.getElementById("msgStatus-small-medium-screen");
	if(emails1SMS.value == emails2SMS.value) {
		return true;
	} else {
		messageStatus2.innerHTML = "Error: Emails must match";
		return false;
	}
}
function matchCheck3() {
	var emails1TS = document.forms["contact-form-tiny-screen"]["inquirerEmail-tiny-screen"];
	var emails2TS = document.forms["contact-form-tiny-screen"]["inquirerEmailCheck-tiny-screen"];
	var messageStatus3 = document.getElementById("msgStatus-tiny-screen");
	if(emails1TS.value == emails2TS.value) {
		return true;
	} else {
		messageStatus3.innerHTML = "Error: Emails must match";
		return false;
	}
}
/* ----------------------------------- Contact US: End ----------------------------------- */

