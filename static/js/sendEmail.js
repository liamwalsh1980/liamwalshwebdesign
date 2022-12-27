function sendMail(contactForm) {
    var modal = document.getElementById("modal");

    emailjs.send("service_bv0x1rb", "purecode", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "contact_number": contactForm.number.value,
        "more_information": contactForm.message.value
    })
    .then(
        function (response) {
            console.log("SUCCESS", response);
            $(".modal-message").text("Thank you for project request " + contactForm.name.value + ". You will receive an email or call very soon to dicuss further");
            modal.style.display = "block";
            $("#closing-btn").click(function () {
                location.reload();
            });
        },
        function (error) {
            console.log("FAILED", error);
            $(".modal-message").text("Sorry " + contactForm.name.value + " something went wrong. Please try submitting your request again!");
            modal.style.display = "block";
            $("#closing-btn").click(function () {
                location.reload();
            });
        });
    return false;
}