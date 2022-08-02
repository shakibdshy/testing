var jwt = require('jsonwebtoken');
var uuid4 = require('uuid4');

var app_access_key = '62e6dcaec166400656963090';
var app_secret = '-belWcI0HxQpS_lJC7a7IGz8zltdLX5rQad_yf6xKlcxEFWaULPyyNamqmUP8dnhP8NZexPV-lgDgPEQuAaoLVr7GfTyzrrU-PuhPVEUyYzlhWcOzKqejKdoOGTm_IQz9V4JohCcDbx8Q7fmq958RNYbCmpZH7mz-KaDKa95fcs=';

var payload = {
    access_key: app_access_key,
    room_id: '62e9232ec166400656965011',
    user_id: '62e6dcaec16640065696308d',
    role: 'host, guest',
    type: 'app',
    version: 2,
    iat: Math.floor(Date.now() / 1000),
    nbf: Math.floor(Date.now() / 1000)
};

jwt.sign(
    payload,
    app_secret,
    {
        algorithm: 'HS256',
        expiresIn: '24h',
        jwtid: uuid4()
    },
    function (err, token) {
        console.log(token);
    }
);
