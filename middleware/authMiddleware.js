module.exports = (req, res, next) => {
    const { email, password } = req.body;

    // Check if required fields exist
    if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
    }

    next();
};
