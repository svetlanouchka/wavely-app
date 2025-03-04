const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "odessa.cassin@ethereal.email",
		pass: "b5w5rk4Uz8SD7hdgZH",
	},
});

async function sendEmail(contact) {
	try {
		const formattedMessage = contact.message.replace(/\n/g, "<br>");
		const info = await transporter.sendMail({
			from: contact.email,
			to: "odessa.cassin@ethereal.email",
			subject: "Message - Formulaire de contact",
			html: `<div><p>${formattedMessage}</p></div>`,
		});

		return info;
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
	}
}

module.exports = sendEmail;
