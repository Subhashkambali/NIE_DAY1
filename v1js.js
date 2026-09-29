function vote() {

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const country = document.getElementById("country").value.trim().toLowerCase();

    const answer = document.getElementById("Answer");

    answer.classList.remove("eligible", "not-eligible");

    if (name === "" || age === 0 || country === "") {

        answer.textContent = "⚠️ Please enter all the details.";

        answer.classList.add("not-eligible");

        return;
    }

    if (age >= 18 && country === "india") {

        answer.textContent =
            "✓ " + name + ", you are eligible to vote!";

        answer.classList.add("eligible");

    } else if (age < 18) {

        answer.textContent =
            "✕ " + name + ", you are not eligible to vote.";

        answer.classList.add("not-eligible");

    } else {

        answer.textContent =
            "✕ Eligibility is currently checked for India.";

        answer.classList.add("not-eligible");
    }
}