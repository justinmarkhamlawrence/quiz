$(document).ready(function() {
	var restart = function() {
		var q1 = [
			"An object falls out of an airplane, and falls freely downward. Its"
		, {
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

		$("#start").on("click", function(e) {
			e.preventDefault();
			$(".section h5").hide();
			$(".section p").hide();
			$(".section").append("<p>" + q1[0] + "</p>");
			$(".section").append("<p>" + q1[1] + "</p>");
			console.log(q1[1]);
			//$("#start").append("<p>" + (q1.a) + "</p>");
		})
	}
	restart();
});