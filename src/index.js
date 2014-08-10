exports.fuzzJSON = function* (input, payloads, replace, fuzzBack, fuzzFront) {
	if (Array.isArray(input)) {
		
	} else
	if (typeof(input) == 'object') {
		for (var key in input) {
			var value = input[key];
			
			for (var newValue of arguments.callee(value, payloads, fuzzBack, fuzzFront)) {
				var newInput = JSON.parse(JSON.stringify(input));
				
				newInput[key] = newValue;
				
				yield newInput;
			}
		}
	} else {
		for (var payload in payload) {
			yield payload
			
			if (fuzzBack) {
				yield input + payload; // TODO: detect type
			}
			
			if (fuzzFront) {
				yield payload + input; // TODO: detect type
			}
		}
	}
};
