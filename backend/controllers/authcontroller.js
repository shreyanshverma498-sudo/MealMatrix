const token = jwt.sign({
    id: user._id,
    role: user.role,      // "user" or "admin"
    hotelId: user.hotelId
}, process.env.JWT_SECRET);