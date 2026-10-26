document
    .getElementById("nameForm")
    .addEventListener("submit", function (event) {

        // event.preventDefault();

        let name = document
            .getElementById("nameInput")
            .value
            .trim();

        if (name === "") {
            document
                .getElementById("message")
                .textContent = "Please enter your name.";
        } else {
            document
                .getElementById("message")
                .textContent = "Form accepted. Hello, " + name + "!";
        }
    });