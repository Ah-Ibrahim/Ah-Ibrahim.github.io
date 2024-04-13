window.addEventListener("DOMContentLoaded", (event) => {
    const submit_button = document.getElementById('contact-submit');

    if (submit_button) {
        submit_button.addEventListener("click", function (e) {
            var required = document.querySelectorAll("[required]");

            required.forEach(function (element) {
                if (element.value.trim() == "") {
                    element.style.borderColor = "red";
                } else {
                    element.style.borderColor = "#ACBDBA";
                }
            });
        });
    }
});
