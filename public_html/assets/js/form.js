//**********************************************************//
	// regexp functions
//**********************************************************//

//all
function minMax(str, min, max){
	return (str.length>min && str.length < max);
}

//Full Name
function fullName(str) {
	rxAlphNumSpaces = /^[A-Za-z ]+$/;
	return (rxAlphNumSpaces.test(str));
}

//Phone Number
function numberSpaces(str){
    rxNumSpaces = /^[0-9 ]+$/;
    return (rxNumSpaces.test(str));
}

//Email Address
function email(str) {
	rxEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return (rxEmail.test(str));
}

//Date
//Matches 
// 12/12/2014 | 12-12-2014
// Non-Matches	
// 12-12-14 | 12-21-2014
function date(str) {
	rxDate = /^[A-Za-z0-9 ]+$/;
	return (rxDate.test(str));
}

//Time
// Matches	
// 08:00AM | 10:00am | 7:00pm
// Non-Matches	
// 13:00pm | 12:65am

function time(str) {
	rxTime = /^[A-Za-z0-9.: ]+$/;
	return (rxTime.test(str));
}

//passengers, Flight Duration
function numbers(str){
    rxNumbers = /^[0-9]+$/;
    return (rxNumbers.test(str));
}


//**********************************************************//
	//messages
//**********************************************************//

//error message
var fail_numbers_only_msg="Sorry only a number can be accepted"

// min messages
var fail_short_alpha_msg ="Oops, too few characters - we need at least two characters(A-Z)"
var fail_short_phone_msg="Oops, too few numbers, please check your phone number!"
var fail_short_passenger_msg="Sorry we need at least 1 passenger for this trip"

// max messages
var fail_long_alpha_msg ="You must have a very long name!, please try again"
var fail_long_phone_msg ="You Phone Number looks too long, please check your number"


//fail messages
var fail_name_message = "Sorry no numbers in your name, eg John Smith"
var fail_phone_msg = "That phone number doesnt look right please check it"
var fail_email_msg = "That email address doesn't look right, please try again 'eg john@smith.com'"
var fail_date_msg = "That date doesn't look right please try again, eg Tuesday or 9 May"
var fail_time_msg = "The time doesn't look right please try again eg 1.00pm"

var fail_passenger6_msg = "Sorry too many passengers, only 6 passengers allowed on this trip"
var fail_passenger7_msg = "Sorry too many passengers, only 7 passengers allowed on this trip"

//success messages
 var successmsg = "Great Thanks!"

//********************************************************************************//
	//input check functions
//*******************************************************************************//

//Full Name - checked *****************************************************

document.querySelector('fieldset input[name="fullname"]').addEventListener('blur', function(e) {
	if(this.value.length<2){
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_short_alpha_msg];
		fail(this);
	}else if(this.value.length>20){
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_long_alpha_msg];
		fail(this);
	}else{
		if(fullName(this.value)){
			this.nextElementSibling.innerHTML=[successmsg];
			success(this);
		}else{
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_name_message];
			fail(this);
		}
	}
});

//Phone Number - checked *****************************************************

document.querySelector('fieldset input[name="phonenumber"]').addEventListener('blur', function(e) {
	if(this.value.length<7){
	clearClass(this);
	this.nextElementSibling.innerHTML=[fail_short_phone_msg];
	fail(this);
	}else if(this.value.length>20){
	clearClass(this);
	this.nextElementSibling.innerHTML=[fail_long_phone_msg];
	fail(this);
	}else{
		if(numberSpaces(this.value)){
			this.nextElementSibling.innerHTML=[successmsg];
			success(this);
		}else{
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_phone_msg];
			fail(this);
		}
	}
});

//Email - checked *****************************************************

document.querySelector('input[name="email"]').addEventListener('blur', function(e) {
	if(email(this.value)){
		this.nextElementSibling.innerHTML=[successmsg];
		success(this);
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_email_msg];
		fail(this);
	}
});

//Dates - checked *****************************************************

// sourced from: http://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function createarray(myNodeList,myarray){
	for (var i = 0; i < myNodeList.length; i++) {
  	myarray.push(myNodeList[i]);
	}
}

var allthedates = document.querySelectorAll('input[name="date"]');
var thedatesarray = [];

createarray(allthedates,thedatesarray);

//console.log(thedatesarray);

for (var i = 0; i < thedatesarray.length; i++) {
	thedatesarray[i].addEventListener('blur', function(e) {
	if(date(this.value)){
		this.nextElementSibling.innerHTML=[successmsg];
		success(this);
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_date_msg];
		fail(this);
		}
	});
};


//Time - checked *****************************************************

var allthetimes = document.querySelectorAll('input[name="time"]');
var thetimesarray = [];

createarray(allthetimes,thetimesarray);

//console.log(thetimesarray);

for (var i = 0; i < thetimesarray.length; i++) {
	thetimesarray[i].addEventListener('blur', function(e) {
	if(time(this.value)){
		this.nextElementSibling.innerHTML=[successmsg];
		success(this);
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_time_msg];
		fail(this);
		}
	});
};


//Passengers 6 - checked *****************************************************

var passengers6 = document.querySelectorAll('input[data-number="6"]');
var passengers6array = [];

createarray(passengers6,passengers6array);

//console.log(thetimesarray);

for (var i = 0; i < passengers6array.length; i++) {
	passengers6array[i].addEventListener('blur', function(e) {
	if(numbers(this.value)){
		x = parseInt(this.value);
		if(x<=0){
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_short_passenger_msg];
			fail(this);
		}else if(x>6){
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_passenger6_msg];
			fail(this);
		}else{
			this.nextElementSibling.innerHTML=[successmsg];
			success(this);
		}
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_numbers_only_msg];
		fail(this);
	}
});
};

//Passengers 7 - checked *****************************************************

document.querySelector('input[data-number="7"]').addEventListener('blur', function(e) {
	if(numbers(this.value)){
		x = parseInt(this.value);
		if(x<=0){
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_short_passenger_msg];
			fail(this);
		}else if(x>7){
			clearClass(this);
			this.nextElementSibling.innerHTML=[fail_passenger7_msg];
			fail(this);
		}else{
			this.nextElementSibling.innerHTML=[successmsg];
			success(this);
		}
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_numbers_only_msg];
		fail(this);
	}
});

//Hours - checked *****************************************************

document.querySelector('input[name="duration"]').addEventListener('blur', function(e) {
	if(numbers(this.value)){
		this.nextElementSibling.innerHTML=[successmsg]
		success(this);
	}else{
		clearClass(this)
		this.nextElementSibling.innerHTML=[fail_numbers_only_msg]
		fail(this);
	}
});

//Charter Passenger - checked *****************************************************

document.querySelector('input[name="charter-trip-passenger"]').addEventListener('blur', function(e) {
	if(numbers(this.value)){
		this.nextElementSibling.innerHTML=[successmsg];
		success(this);
	}else{
		clearClass(this);
		this.nextElementSibling.innerHTML=[fail_numbers_only_msg];
		fail(this);
	}
});

//Charter Textbox - checked *****************************************************

document.querySelector('textarea').addEventListener('blur', function(e) {
	success(this);
});

//Form Functions - checked *****************************************************

function fail(currObj){
	currObj.nextElementSibling.className="fail";
	enable(this);
}

function success(currObj){
	currObj.nextElementSibling.className="success"
	enable(this);
}

function clearClass(currObj){
	currObj.nextElementSibling.className=""
}

//Form Actions - checked *****************************************************

//Hide and Show
var li = document.querySelectorAll('#thetripsmenu li');
var liArray = [];

var divset = document.querySelectorAll('form>div');
var divsetArray = [];

//console.log(divset);

//console.log(li);

createarray(li,liArray);
createarray(divset,divsetArray);

divsetArray.splice(0,2); //remove drop-down div so li = tripforms;

//console.log(divsetArray);

for (var i = 0; i < liArray.length; i++) {
	liArray[i].addEventListener('click', function(e) {
	loseDiv(this);
	var thetripname = this.innerHTML;
	// document.querySelector('input[name="the-trips"]').value=[this.innerHTML];
	document.getElementById('the-trips').value=[this.innerHTML];
	var x = liArray.indexOf(this);
	divsetArray[x].className="visible";
	});
};

function loseDiv(currObj){
	var stuff = document.querySelector('.visible');
	if(stuff){
		return stuff.className="";
	} return false;
}

//Form validation - checked *****************************************************

function enable(currObj){
	x = document.querySelectorAll('div.visible span').length; //select all visible spans + add the three onload visible fields
	y = document.querySelectorAll('.success').length;

	buttons = document.querySelectorAll('button[type="submit"]');
	var buttonsArray = [];
	createarray(buttons,buttonsArray);

	for (var i = 0; i < buttonsArray.length; i++) {
		if((x+3)===y){
		buttonsArray[i].disabled=false;
		}else{
		buttonsArray[i].disabled=true;
		}
	};
}


