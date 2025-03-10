const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

const hashingOptions = {
	type: argon2.argon2id,
	memoryCost: 2 ** 16,
	timeCost: 5,
	parallelism: 1,
};

const hashPassword = (req, res, next) => {
	// hash the password using argon2 then call next()
	argon2
		.hash(req.body.password, hashingOptions)
		.then((hashedPassword) => {
			req.body.hashed_password = hashedPassword;
			delete req.body.password;
			next();
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const verifyPassword = (req, res) => {
	console.log("req.user -->", req.user);
	argon2
		.verify(req.user.hashed_password, req.body.password)
		.then((isVerified) => {
			if (isVerified) {
				const payload = { sub: req.user.id };

				const token = jwt.sign(payload, process.env.JWT_SECRET, {
					expiresIn: "4h",
				});

				delete req.user.hashed_password;
				res.send({ token, user: req.user });
			} else {
				res.sendStatus(401);
			}
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(500);
		});
};

const verifyToken = (req, res, next) => {
	try {
		const authorizationHeader = req.get("Authorization");

		if (authorizationHeader == null) {
			throw new Error("Authorization header is missing");
		}

		const [type, token] = authorizationHeader.split(" ");

		if (type !== "Bearer") {
			throw new Error("Authorization header has not the 'Bearer' type");
		}

		req.payload = jwt.verify(token, process.env.JWT_SECRET);

		next();
	} catch (err) {
		console.error(err);
		res.sendStatus(401);
	}
};

const verifyId = (req, res, next) => {
	try {
		if (req.payload.sub === Number(req.params.id, 10)) {
			next();
		} else {
			res.sendStatus(403);
		}
	} catch (err) {
		console.error(err);
		res.sendStatus(401);
	}
};

module.exports = {
	hashPassword,
	verifyPassword,
	verifyToken,
	verifyId,
};
