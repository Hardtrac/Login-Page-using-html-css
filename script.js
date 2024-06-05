<form action="https://docs.google.com/spreadsheets/d/14KXopA1e_moj2898_TaeyV0G0lbau87RK68AjM28rJ4/edit#gid=0" method="POST">
    <div class="email">
        <input type="text" placeholder="Email" required>
        <span class="error-txt">Email can't be blank</span>
    </div>
    <div class="password">
        <input type="password" placeholder="Password" required>
        <span class="error-txt">Password can't be blank</span>
    </div>
    <button type="submit">Login</button>
</form>

<script>
    const form = document.querySelector("form");
    const eField = form.querySelector(".email"),
        eInput = eField.querySelector("input"),
        pField = form.querySelector(".password"),
        pInput = pField.querySelector("input");

    form.onsubmit = (e) => {
        e.preventDefault();

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
            } else {
                eField.classList.remove("error");
                eField.classList.add("valid");
            }
        }

        function checkPass() {
            if (pInput.value == "") {
                pField.classList.add("error");
                pField.classList.remove("valid");
            } else {
                pField.classList.remove("error");
                pField.classList.add("valid");
            }
        }

        if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
            window.location.href = form.getAttribute("action");
        }
    }
</script>
