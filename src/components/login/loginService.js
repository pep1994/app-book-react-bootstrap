

class LoginService {

     login(email, password, onSuccessOrError) {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

         fetch('https://reqres.in/api/login', options)
         .then(result => {
            console.log(result);
            return result.json();
        })
        .then(res => {
            console.log(res);
            onSuccessOrError(res);
        }
        ) 
    }

}

export default LoginService
