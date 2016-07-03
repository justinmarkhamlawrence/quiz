$(document).ready(function() {
	var q1 = [
		"An object falls out of an airplane, and falls freely downward. Its"
	,  {
		a: "mass increases"
		
	}, {
		b: "acceleration increases"
		
	}, {
		c: "velocity increases"
		
	}, {
		d: "gravity increases"
		
	}, 
		"velocity increases"
	];

	var q2 = [
		"You brake suddenly. The passengers in your car lurch forward. This demonstrates"
	, {
		a: "gravity" 
		 
	}, {
		b: "mass"
		
	}, {
		c: "good driving"
		
	}, {
		d: "inertia"
		
		}, 
			"inertia"
	];

	var q3 = [
		"A truck is travelling at 10 m/s. A package drops off the truck. Neglecting air resistance, as the package hits the ground, its horizontal speed is"
	, {
		a: "0 m/s" 
		
	}, {
		b: "10 m/s"
		
	}, {
		c: "20 m/s"
		
	}, {
		d: "depends on the height of the truck"
		
	}, 
		"10 m/s"
	];

	var q4 = [
		"A truck is decelerating. A package is dropped from the midpoint of the ceiling of the truck's storage compartment. The package hits the floor"
	, {
		a: "immediately beneath the midpoint of the ceiling"
		
	}, {
		b: "closer to the back of the truck than the midpoint"
		
	}, {
		c: "closer to the front of the truck than the midpoint"
		
	}, {
		d: "none of the above"
		
		}, 
			"closer to the front of the truck than the midpoint"
	];

	var q5 = [
		"You tie a rock to a string and whirl it in a horizontal circle. The string breaks. In the absence of gravity, the rock"
	, {
		a: "travels in a circle"
		
	}, {                    
		b: "falls in a straight line down to the earth"
		
	}, {
		c: "flies in a straight line vertically up into the air"
		
	}, {
		d: "travels in a straight line horizontally away from you"
		
		}, 
			"travels in a straight line horizontally away from you"
	];
	
	var results = -1;
	var questions = [q1,q2,q3,q4,q5];
	var section = [$(".section0"), $("section1"), $("section2"), $("section3"), $("section4"), $("section5"), $("section6")];
		$(".section0").css("display", "block")
		var correct 
		var i = 1
		var next = function(selection) {
			if (i !== 1) {
				correct = questions[i-2][5];
			};			
			if (correct === selection) {
				results++
			};
			$(".section"+i).css("display", "block");
			i++;
			$("span").text(results);
			if (i===7) {
				$("#next").hide();
			}
		}
	
	$("#next").on("click", function(e) {
		e.preventDefault();
		var selection = $('form input[name=q1]:checked').val()
		console.log(selection)
		//if selection is undefined, with the exception of the first click, don't advance
		if (selection || i===1) { 
			$(".invis").hide();
			next(selection);
			$('.radio-btn').prop('checked', false);
		}		
	});

	$("#reset").on("click", function() {
			//hide report card section
			$(".section6").hide();
			//show intro section
			$(".section0, #next").show();
			//reset counters
			i=1;	
			results=0;	
	});

	$(".question1").text(q1[0]);
	$(".question2").text(q2[0]);
	$(".question3").text(q3[0]);
	$(".question4").text(q4[0]);
	$(".question5").text(q5[0]);
	for (var j = 1; j <= 4; j++) {
		var key = Object.keys(q1[j])[0];
		$(".section1 ul").append('<li><input value=\'' +q1[j][key]+'\' class="radio-btn" name="q1" type="radio" id="test'+j+'" /><label for="test'+j+'">'+ q1[j][key] +'</label></li>');

		var key = Object.keys(q2[j])[0];
		$(".section2 ul").append('<li><input value=\'' +q2[j][key]+'\' class="radio-btn" name="q1" type="radio" id="test'+j+5+'" /><label for="test'+j+5+'">'+ q2[j][key] +'</label></li>');
	
		var key = Object.keys(q3[j])[0];
		$(".section3 ul").append('<li><input value=\'' +q3[j][key]+'\' class="radio-btn" name="q1" type="radio" id="test'+j+10+'" /><label for="test'+j+10+'">'+ q3[j][key] +'</label></li>');
	
		var key = Object.keys(q4[j])[0];
		$(".section4 ul").append('<li><input value=\'' +q4[j][key]+'\' class="radio-btn" name="q1" type="radio" id="test'+j+15+'" /><label for="test'+j+15+'">'+ q4[j][key] +'</label></li>');	
	
		var key = Object.keys(q5[j])[0];
		$(".section5 ul").append('<li><input value=\'' +q5[j][key]+'\' class="radio-btn" name="q1" type="radio" id="test'+j+20+'" /><label for="test'+j+20+'">'+ q5[j][key] +'</label></li>');
	};

});