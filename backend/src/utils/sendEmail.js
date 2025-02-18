const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "reymundo.prohaska93@ethereal.email",
		pass: "9wmHDF8D694SKHjbD4",
	},
});

async function sendEmail(contact) {
	try {
		const info = await transporter.sendMail({
			from: contact.email,
			to: "reymundo.prohaska93@ethereal.email",
			subject: "Message - Formulaire de contact",
			html: `<div><p>${contact.message}</p></div>`,
		});

		return info;
	} catch (error) {
		console.error("Erreur lors de l'envoi de l'email:", error);
	}
}

module.exports = sendEmail;
