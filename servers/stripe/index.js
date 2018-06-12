const stripeSecretToken = 'sk_test_TX5jK09TJSBo7Q85m2zpShiP';

var stripe = require('stripe')(stripeSecretToken); //paste your test secret here
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router = express.Router();

app.use(bodyParser.json({ extended: true }));
app.use(cors());

router.post('/processpay', function(request, response) {
	var stripetoken = request.body.stripetoken;
	var amountpayable = request.body.amount;

	console.log('stripetoken: ' + stripetoken);
	console.log('amountpayable: ' + amountpayable);

	stripe.charges.create({
		amount: amountpayable,
		currency: 'usd',
		description: 'Sample transaction',
		source: stripetoken
	}, function(err) {
		if (err) {
			console.log(err);
			response.send({ success: false });
		}
		else {
			response.send({ success: true });
		}
	})
});

app.use(router);
app.listen(process.env.PORT || 3333, function() {
	console.log('Server started');
});
