const jwt = require('jsonwebtoken');
const config = require('../config');
const err = require('../utils/error');

const secret = config.jwt.secret;

function sign(data){
    return jwt.sign(data, secret);
}

function verify(token){
    return jwt.verify(token, secret)
}

const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req);
        console.log(decoded);

        if(decoded.id !== owner){
            throw err('La accion no es permitida para el usuario', 401);
        }
    },
}

function getToken(auth){
    if(!auth){
        throw err('No viene Token', 401);
    }

    if (auth.indexOf('Bearer ') === -1){
        throw  err('Formato Invalido');
    }
    let token = auth.replace('Bearer ', '');

    return token;
}

function decodeHeader(req){
    const authorizacion = red.header.authorizacion || '';
    const token = getToken(authorizacion);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}

module.exports = {
    sign,
    check,
};