$(document).ready(function () {

    // Smooth fade animations
    $("body").hide().fadeIn(800);

    // Profile Page — Validation + localStorage
    $("#studentForm").submit(function (e) {
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let cls = $("#class").val();

        if (name.trim() === "") {
            alert("Name is required");
            return;
        }

        if (!email.match(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)) {
            alert("Enter a valid email");
            return;
        }

        if (!phone.match(/^[0-9]+$/)) {
            alert("Phone must be numeric");
            return;
        }

        let studentData = {
            name,
            email,
            phone,
            class: cls
        };

        localStorage.setItem("student", JSON.stringify(studentData));
        $("#saveMsg").fadeIn();
    });

});
