document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");
    const eField = form.querySelector(".field.email"),
        eInput = eField.querySelector("input"),
        pField = form.querySelector(".field.password"),
        pInput = pField.querySelector("input");
    const showPasswordCheckbox = document.getElementById('show-password');

    showPasswordCheckbox.addEventListener('change', () => {
        pInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });

    form.onsubmit = (e) => {
        e.preventDefault();
        console.log('Form submission prevented');

        (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
        (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

        setTimeout(() => {
            eField.classList.remove("shake");
            pField.classList.remove("shake");
        }, 500);

        eInput.onkeyup = () => { checkEmail(); }
        pInput.onkeyup = () => { checkPass(); }

        function checkEmail() {
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            const errorTxt = eField.querySelector(".error-txt");
            if (!eInput.value.match(pattern)) {
                eField.classList.add("error");
                eField.classList.remove("valid");
                eInput.value != "" ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
                console.log('Invalid email');
            } else {
                eField.classList.remove("error");
                eField.classList.add("valid");
                console.log('Valid email');
            }
        }

        function checkPass() {
            const errorTxt = pField.querySelector(".error-txt");
            if (pInput.value == "") {
                pField.classList.add("error");
                pField.classList.remove("valid");
                errorTxt.innerText = "Password can't be blank";
                console.log('Password is blank');
            } else {
                pField.classList.remove("error");
                pField.classList.add("valid");
                console.log('Valid password');
            }
        }

        if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
            console.log('Redirecting to:', form.getAttribute("action"));
            window.location.href = form.getAttribute("action");
        } else {
            console.log('Form contains errors');
        }
    }
});
