//**********************************************************//

//Notes about Indexpage JS-
// Always check the length and item types in array when restyling. As the functions are
//are driven by nodelists (css queryselectors) which have been turned into arrays.

//Always remember to clear the back and forward buttons when clicking on thumbnail

//Console Logs have been left in for this reason. 

//**********************************************************//



//**********************************************************//
	// crew gallery
//**********************************************************//

//variables

var crewprofilesarray = [];
var crewprofiles = document.querySelectorAll('.profilebox>div');

function createarray(myNodeList,myarray){
	for (var i = 0; i < myNodeList.length; i++) {
  	myarray.push(myNodeList[i]);
	}
}

createarray(crewprofiles,crewprofilesarray);

//console.log(crewprofilesarray);

var currentprofile = document.querySelector('.profilebox>.active');

//console.log(currentprofile);

var backbutton = document.querySelector('#crew-button-back');
var forwardbutton = document.querySelector('#crew-button-forward');


forwardbutton.addEventListener('click', function(e) {
	var currentprofile = document.querySelector('.active');
	//console.log(currentprofile);
	x = crewprofilesarray.indexOf(currentprofile);
	y = x+1;

	crewprofilesarray[y].classList.remove("inactive");
	currentprofile.classList.add("move");
	setTimeout(function(){currentprofile.classList.remove("move")},2000);
	setTimeout(function(){currentprofile.classList.remove("active")},2000);
	setTimeout(function(){currentprofile.classList.add("inactive")},2000);
	setTimeout(function(){crewprofilesarray[y].classList.add("active")},2000);
	check(y);
});

backbutton.addEventListener('click', function(e) {
	var currentprofile = document.querySelector('.active');
	x = crewprofilesarray.indexOf(currentprofile);
	y = x-1;
	//console.log(y);
	//console.log(crewprofilesarray[0]);

	crewprofilesarray[y].classList.add('previousprofile');
	crewprofilesarray[y].classList.remove('inactive');
	setTimeout(function(){crewprofilesarray[y].classList.remove("previousprofile")},1);
	setTimeout(function(){currentprofile.classList.remove("active")},2000);
	setTimeout(function(){currentprofile.classList.add("inactive")},2000);
	crewprofilesarray[y].classList.add('active');
	check(y);
});

//show and hide buttons for crew profiles
function check(x){
	if(x===0){
		backbutton.classList.add('hide');
		forwardbutton.classList.remove('hide');
	}else if(x===crewprofilesarray.length-1){
		backbutton.classList.remove('hide');
		forwardbutton.classList.add('hide');
	}else{
		backbutton.classList.remove('hide');
		forwardbutton.classList.remove('hide');
	}
}


//**********************************************************//
	// Image Gallery
//**********************************************************//

//Thumbnails
var imagesarray = [];
var imagesthumbs = document.querySelectorAll('.thumbnails>img');

function createarray(myNodeList,myarray){
	for (var i = 0; i < myNodeList.length; i++) {
  	myarray.push(myNodeList[i]);
	}
}

//Create Thumbnails Array
createarray(imagesthumbs,imagesarray);



//Create Big Images Array (and array preloads images)
var bigimages =[];

for (var i = 0; i < imagesarray.length; i++ ) {

	var my_image = new Image();

	var str = imagesarray[i].src;

	var res = str.replace("gallery100","gallery600");

	var newimage = my_image.src=res;

	bigimages.push(newimage)
};


// Thumbnails - "Click"
for (var i = 0; i < imagesarray.length; i++) {
	imagesarray[i].addEventListener('click', function(e) {
		var imageframe = document.querySelector("#lge-image-display img");
		//console.log(imageframe);
		var theimage = imagesarray.indexOf(this);
		//console.log(theimage);
		imageframe.src=[bigimages[theimage]];
		//console.log(bigimages.indexOf(imageframe.src));
		disabled(theimage);
	});
};

// Forward and Back Buttons for Large Gallery
var forward = document.querySelector('#forwardbutton');
var backward = document.querySelector('#backbutton');

forward.addEventListener('click', function(e) {
	
	var imageframe = document.querySelector("#lge-image-display img");
	x = bigimages.indexOf(imageframe.src);
	y = x+1;

	if(x<bigimages.length-1){
		imageframe.src=bigimages[y];
		disabled(y);
	}else{
		imageframe.src=bigimages[x];
		disabled(y);
	};

});

backward.addEventListener('click', function(e) {
	
	var imageframe = document.querySelector("#lge-image-display img");
	x = bigimages.indexOf(imageframe.src);
	y = x-1; 

	 if(x>0){
	 	imageframe.src=bigimages[y];
	 	disabled(y);
	 }else{
	 	imageframe.src=bigimages[x]; //The first image in the array
	 	disabled(y);
	 }
});

function disabled(x){
	if(x==0){
		backward.disabled=true;
		forward.disabled=false;
	}else if(x==bigimages.length-1){
		forward.disabled=true;
		backward.disabled=false;
	}else{
		forward.disabled=false;
		backward.disabled=false;
	}
}

//**********************************************************//
	//Video Event Handler
//**********************************************************//

document.querySelector("#playbutton").addEventListener('click', function(e) {
	var x = document.createElement('object');
	x.setAttribute("data","http://www.youtube.com/embed/IakhgXrfIJA?rel=0&autoplay=1");
	x.setAttribute("height","480");
	x.setAttribute("width","1024");
	this.parentNode.appendChild(x);
	console.log(x.attributes);
	this.previousElementSibling.remove();
	this.remove();
});
