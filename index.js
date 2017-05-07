var alexa = require('alexa-app');

// Create a skill

var hello = new alexa.app('hello');

// Default intent
hello.launch((req, res) => {
	res.say('You can ask me for the lunch menu or to lower the blinds');

	// keep session open
	// continue to listen for interacton, leave stream open
	res.shouldEndSession(false);
});

var lunch = {
	"slots": {},
	"utterances": [ "{lunch menu}" ]
};

var blind = {
	"slots": {},
	"utterances": [ "{lower the blinds}" ]
};

var quit = {
	"slots": {},
	"utterances": [ "{Thank you}" ]
};



// Create an intent called hello
hello.intent('lunch', lunch, (req, res) => res.say('For lunch there will be turkey sandwiches and chocolate chip cookies.').shouldEndSession(false));

hello.intent('blind', blind, (req, res) => res.say('I am lowering the blinds.').shouldEndSession(false));

hello.intent('quit', quit, (req, res) => res.say('You are welcome.').shouldEndSession(true));


// connect the alexa-app to AWS Lambda
exports.handler = hello.lambda();