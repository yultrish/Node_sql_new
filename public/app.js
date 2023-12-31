// window.on('load', function() {
window.addEventListener('load', () => {

    console.log('app.js is working');

    const btn = document.querySelector(' button.submit');

    btn.addEventListener('click', async function (e) {
        e.preventDefault();

        const email = document.querySelector('input#email');
        console.log(email.value);
        const password = document.querySelector('input#password')
        const error = document.querySelector('form .error');
        const message = document.querySelector('form .error .error-message');

        //checks for empty email and password
        if (email.value == '' || email.value == null || password.value == '' || password.value == null) {
            $(error).fadeIn('3000');
            $(message).text('Please fill all fields');

            // remove error message after 3 seconds
            setTimeout(() => {
                $(error).fadeOut('3000');
            }, 3000);
            return;
        } else {

            //make fetch request
            const result = await fetch('http://localhost:7070/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            }) //fetch ends here

            //check http status
            if (result.status != 200) {
                //get message from response
                const response = await result.json()
                $(error).fadeIn('2000');
                $(message).text(response.message);

                // remove error message after 3 seconds
                setTimeout(() => {
                    $(error).fadeOut('2000');
                }, 3000);

                return;
            }
            if (result.status == 200) {
                //getting user back from server
                const response = await result.json();
                const { name } = response;


                //set new storage
                localStorage.setItem('name', name);


                // redirect to dashboard
                window.location.href = './dashboard.html';
            }

        }





    });


});


// Password visibility
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute('type') === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye")
});