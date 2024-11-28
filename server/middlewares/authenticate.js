const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
    try {
        const authHeader = req.header("authorization");
        if (!authHeader) {
            return res.status(401).send("Truy cập bị từ chối");
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).send("Truy cập bị từ chối");
        }

        jwt.verify(token, "the-super-strong-secret", (err, decoded) => {
            if (err) {
                return res.status(401).send("Truy cập bị từ chối");
            }

            req.userInfo = decoded;
            next();
        });
    } catch (err) {
        return res.status(401).send("Truy cập bị từ chối");
    }
}

// Add middleware to check SPSO role
function authenticateSPSO(req, res, next) {
    authenticate(req, res, () => {
        if (!req.userInfo.isSPSO) {
            return res.status(403).send("Không có quyền truy cập");
        }
        next();
    });
}

module.exports = { authenticate, authenticateSPSO };
