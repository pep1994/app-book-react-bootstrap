

class LoginService {

     login(email, password, onSuccessOrError) {

        const options = {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
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


    // axios.post('https://reqres.in/api/login', {email:email, password:password}).then(function(result){
    //     console.log(result.data);
    //     onSuccess(result.data);

    // }, function (error) {
    //     console.error(error);
    //     onError(error.response.data)

    // })


}

export default LoginService
