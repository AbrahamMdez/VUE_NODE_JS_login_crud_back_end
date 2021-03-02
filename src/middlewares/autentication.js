import jwt from 'jsonwebtoken';

export const verificarAuth = (req, res,next) => {

    const token = req.get('token')
    
    jwt.verify(token, process.env.PORT.TOKEN_SECRET || 'secret_token', (err, decoded) => {
        console.log(token)
        if(err) {
            return res.status(401).json({
                message: 'Usuario no valido'
            });
        }

        req.user = decoded.data;

        next();
    })
};

export const verifyAdmin = (req, res, next) => {

    const rol = req.user.role

    if ( rol === 'ADMIN') {
        next();
    } else {
        return res.status(401).json({
            message: 'Usuario no valido, no eres ADMIN'
        });
    }
};
