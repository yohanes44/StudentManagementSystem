const path = require('path');


const homePageCtrl = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '..' , "public" , "home.html"))
}

const LoginPageCtrl = (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, ".." , "public" , "index.html"))
}

module.exports = {
    homePageCtrl,
    LoginPageCtrl
}
