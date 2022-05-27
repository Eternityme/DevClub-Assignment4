const http = require("http");
const url = require("url");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	//var GUESS = req.url; // Write logic to parse the word which the user guessed from the URL string
	//GUESS = GUESS.slice(10)
	//let length = GUESS.length
	var guess = url.parse(req.url, true).query;
	var feedback = "";
	const GUESS = guess.q;
	const len_g = GUESS.length;
	for ( let x = 0 ; x < len_g ; x++ ){
		if ((SECRET.includes(GUESS.charAt(x))) &&  (GUESS[x]==SECRET[x])){
			feedback = feedback.concat("g");
		}
		else if ((SECRET.includes(GUESS.charAt(x))) &&  (GUESS[x]!=SECRET[x]))
			feedback = feedback.concat("y");
		else{
			feedback = feedback.concat("b");
		}
	}
	//const feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
