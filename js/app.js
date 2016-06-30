$(document).ready(function() {
	
		var q1 = [
			"An object falls out of an airplane, and falls freely downward. Its"
		,  {
			a: "mass increases", 
			correct: false
		}, {
			b: "acceleration increases",
			correct: false
		}, {
			c: "velocity increases",
			correct: true
		}, {
			d: "gravity increases",
			correct: false
		}];

		var q2 = [
			"You brake suddenly. The passengers in your car lurch forward. This demonstrates"
		, {
			a: "gravity", 
			correct: false 
		}, {
			b: "mass",
			correct: false
		}, {
			c: "good driving",
			correct: false
		}, {
			d: "inertia",
			correct: true
		}];

		var q3 = [
			"A truck is travelling at 10 m/s. A package drops off the truck. Neglecting air resistance, as the package hits the ground, its horizontal speed is"
		, {
			a: "0 m/s", 
			correct: false
		}, {
			b: "10 m/s",
			correct: true
		}, {
			c: "20 m/s",
			correct: false
		}, {
			d: "depends on the height of the truck",
			correct: false
		}];

		var q4 = [
			"A truck is decelerating. A package is dropped from the midpoint of the ceiling of the truck's storage compartment. The package hits the floor"
		, {
			a: "immediately beneath the midpoint of the ceiling", 
			correct: false 
		}, {
			b: "closer to the back of the truck than the midpoint",
			correct: false
		}, {
			c: "closer to the front of the truck than the midpoint",
			correct: true
		}, {
			d: "none of the above",
			correct: false
		}];

		var q5 = [
			"You tie a rock to a string and whirl it in a horizontal circle. The string breaks. In the absence of gravity, the rock"
		, {
			a: "travels in a circle", 
			correct: false
		}, {                    
			b: "falls in a straight line down to the earth",
			correct: false
		}, {
			c: "flies in a straight line vertically up into the air",
			correct: false
		}, {
			d: "travels in a straight line horizontally away from you",
			correct: true
		}];
		
		var section = [$(".section0"), $("section1"), $("section2"), $("section3"), $("section4"), $("section5")];
			$(".section0").css("display", "block")
			var i = 1
			var next = function() {
				console.log(section[i]);
				$(".section"+i).css("display", "block");
				
				i++;
			}

		$("#next").on("click", function(e) {
			console.log("hello");
			e.preventDefault();
			$(".invis").hide();
			next();
		});


		

		

		
		$(".question1").text(q1[0]);
		$(".question2").text(q2[0]);
		$(".question3").text(q3[0]);
		$(".question4").text(q4[0]);
		$(".question5").text(q5[0]);
		for (var j = 1; j <= 5; j++) {
					var key = Object.keys(q1[j])[0];
					$(".section1 ul").append('<li><input name="q1"type="radio" id="test'+j+'" /><label for="test'+j+'">'+ q1[j][key] +'</label></li>');
			
					var key = Object.keys(q2[j])[0];
					$(".section2 ul").append('<li><input name="q1"type="radio" id="test'+j+5+'" /><label for="test'+j+5+'">'+ q1[j][key] +'</label></li>');
				
					var key = Object.keys(q3[j])[0];
					$(".section3 ul").append('<li><input name="q1"type="radio" id="test'+j+10+'" /><label for="test'+j+10+'">'+ q1[j][key] +'</label></li>');
				
					var key = Object.keys(q4[j])[0];
					$(".section4 ul").append('<li><input name="q1"type="radio" id="test'+j+15+'" /><label for="test'+j+15+'">'+ q1[j][key] +'</label></li>');	
				
					var key = Object.keys(q5[j])[0];
					$(".section5 ul").append('<li><input name="q1"type="radio" id="test'+j+20+'" /><label for="test'+j+20+'">'+ q1[j][key] +'</label></li>');
				};
					

		
		

});