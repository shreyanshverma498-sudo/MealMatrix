import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
        return res.status(403).json({ message: "Not admin" });
    }

    req.adminId = decoded.id;
    next();
};

export default adminAuth;