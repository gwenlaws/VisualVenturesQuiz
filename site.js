var aa = "art management";
var bb = "digital design";
var cc = "print media";
var dd = "branding / media";
var ee = "animation";
var ff = "environmental design";
var gg = "film and video";

function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;

	var twice = 8;
	var three = 8;
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;
	var g = 0;

	if(question1 == "1"){ // if yes
		a++;
		b++;
		d++;
		f++;
	}
	else if(question1 == "2"){ // if no
		c++;
		g++;
	}
	else if(question2 == "3"){ // if maybe
		e++;
	}

	if(question2 == "1"){
		a++; 
		b++;
		d++;
		f++;
	}
	else if(question2 == "2"){
		c++;
		g++;
	}
	else if(question3 == "3"){
		e++;
	}

	if(question3 == "1"){
		a++;
		b++;
		d++;
		f++;
	}
	else if(question3 == "2"){
		c++;
		g++;
	}
	else if (question3 == "3"){
		e++;
	}

	if(question4 == "1"){
		a++;
		b++;
		d++;
		f++;
	}
	else if(question4 == "2"){
		c++;
		g++;
	}
	else if(question4 == "3"){
		e++;
	}

	if(question5 == "1"){
		a++;
		b++;
		d++;
		f++;
	}
	else if(question5 == "2"){
		c++;
		g++;
	}
	else if(question5 == "3"){
		e++;
	}

	var list = [a, b, c, d, e, f, g];

	list.sort();
	var score = list[list.length-1];
	console.log("got here");
	console.log(list, score);


	/*if(list.length - 1 == list.length - 2){
		twice = list[list.length-2];
	}
	else if(list.length - 1 == list.length - 3){
		three = list[list.length-3];
	}*/

	var pictures = ["img/art man.jpg", "img/digital designer.jpg",
	"img/graphic novelist.jpg", "img/branding designer.jpg", 
	"img/animator.jpg", "img/environmental designer.jpg", "img/videographer.jpg"];
	var messages = ["option 1","option 2","option 3","option 4","5","6","7"];
	var points = ["1", "2", "3", "4", "5", "6", "7"];
	var score;
	var twice;
	var three;

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
	
	//if(twice > 8){
	//	document.getElementById("message").innerHTML = messages[twice];
	//}
}