const nodemailer = require('nodemailer');

exports.handler = function (event, context, callback) {
	let transporter = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		secure: true, // use TLS
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

	let data = JSON.parse(event.body);
	console.log(data);
	let { message } = data;
	console.log(data.message);
	// verify connection configuration
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	transporter.sendMail(
		{
			from: 'denniseitner@gmail.com',
			to: 'denniseitner@gmail.com',
			subject: `Notification from website`,
			html: `
			<h3>Email from ${data.name}</h3>
			<p><b>email:</b> ${data.email}</p>
			<p><b>message:</b> ${data.message}</p>
			`,
		},
		function (error, info) {
			if (error) {
				callback(error);
			} else {
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						result: 'success',
					}),
				});
			}
		}
	);
};
