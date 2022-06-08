function login(params){
    console.log(params);
    const username = params.username;
    const password = params.password;
    if(username=='admin'){
        if(password=='123456'){
            return ({
                status:200,
                message: "Login successful.",
                token: JSON.stringify(Math.random() * 
                    Math.random() * 231242343546454)
            }) 
        }else{
            return ({
                status:400,
                message: "Password Doesn't match. "
            })
        }
    }else{
        return ({
            status:400,
            message: "Error ! Failed to login. "
        })
    }
}
module.exports = {login}