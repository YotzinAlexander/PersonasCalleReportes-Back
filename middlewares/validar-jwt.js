const {response} = require('express');
const jwt = require('jsonwebtoken');


const validarJWT = (req, res = response, next) => {
    //X-TOKEN HEADERS
    const token =  req.header('x-token')

    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'not token'
        });
    }

    try {
        const {uid,name} = jwt.verify(
            token,
            process.env.SECRET_JWT_SEE
        )

        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'not valid token'
        })
    }


    next();

}

module.exports = {
    validarJWT
}