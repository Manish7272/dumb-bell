const jwt = require("jsonwebtoken")

const ensureAuthenticated = (req, resp, next) =>{
    const auth = req.headers["authorization"];
    if(!auth){
        return resp.status(403).json({message:"Unauthorized, JWT token is required."})
    }

    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return resp.status(403).json({message: "unauthorized, JWT token wrong or expired."});

    }
}

module.exports = ensureAuthenticated;