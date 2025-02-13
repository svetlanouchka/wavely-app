const { body, validationResult } = require("express-validator");

const validateUser = [
	body("first_name")
		.trim()
		.notEmpty()
		.withMessage("Le prénom est requis")
		.matches(/^[a-zA-Z\s]*-?[a-zA-Z\s]*$/)
		.withMessage(
			"Le prénom ne peut contenir que des lettres et au maximum un seul tiret",
		)
		.isLength({ min: 2, max: 30 })
		.withMessage("Le prénom doit faire entre 2 et 30 caractères"),
	body("last_name")
		.notEmpty()
		.withMessage("Le nom est requis")
		.matches(/^[a-zA-Z\s]*-?[a-zA-Z\s]*$/)
		.withMessage(
			"Le nom ne peut contenir que des lettres et au maximum un seul tiret",
		)
		.isLength({ min: 2, max: 30 })
		.withMessage("Le nom doit faire entre 2 et 30 caractères"),
	body("birth_date")
		.notEmpty()
		.withMessage("Votre date de naissance est requise")
		.isDate({ format: "DD/MM/YYYY", delimiters: ["/", "-"] })
		.withMessage("Veuillez entrer une date valide"),
	body("email")
		.notEmpty()
		.withMessage("L'email est obligatoire pour vous inscrire")
		.isEmail()
		.withMessage("Veuillez entrer un email valide"),
	body("password")
		.notEmpty()
		.withMessage("Le mot de passe est obligatoire pour vous inscrire")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&?*])[A-Za-z\d!@#$%^&?*]{8,}$/,
		)
		.withMessage(
			"Le mot de passe doit être long de 8 caractères minimum, comporter au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial parmi !@#$%^&?*",
		),
	(req, res, next) => {
		console.log("requête ??--->", req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });
		next();
	},
];

module.exports = validateUser;
