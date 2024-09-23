// Blog page
document.getElementById("blog").addEventListener("click", () => {
    location.href = "./assets/html/blog.html";
});

// Donation & History Button
const donation_button = document.getElementById("donation");
const history_button = document.getElementById("history");
const donation_section = document.getElementById("donation-section");
const history_section = document.getElementById("history-section");

donation_button.addEventListener("click", () => {
    history_section.classList.add("hidden");
    history_section.classList.remove("flex");
    //button class list
    history_button.classList.remove("bg-button1");
    history_button.classList.add("bg-white");
    history_button.classList.add("border-button-border");

    donation_section.classList.add("flex");
    donation_section.classList.remove("hidden");
    //button class list
    donation_button.classList.add("bg-button1");
    donation_button.classList.remove("bg-white");
    donation_button.classList.remove("border-button-border");
});

history_button.addEventListener("click", () => {
    donation_section.classList.add("hidden");
    donation_section.classList.remove("flex");
    //button class list
    donation_button.classList.remove("bg-button1");
    donation_button.classList.add("bg-white");
    donation_button.classList.add("border-button-border");

    history_section.classList.add("flex");
    history_section.classList.remove("hidden");
    //button class list
    history_button.classList.add("bg-button1");
    history_button.classList.remove("bg-white");
    history_button.classList.remove("border-button-border");
});

// Card Data Manupulation
const donation_amount = document.querySelectorAll(".donation-amount");
// Card 1
const card1 = document.getElementById("card-1");
donation_amount[0].querySelector("button").addEventListener("click", () => {
    if (
        isNaN(donation_amount[0].querySelector("input").value) === true ||
        donation_amount[0].querySelector("input").value <= 0
    ) {
        modal_error("Please enter positive integer value");
    } else if (
        parseFloat(document.getElementById("total-coin").innerText) <
        donation_amount[0].querySelector("input").value
    ) {
        modal_error("Amount can not be greater then main balance!");
    } else {
        const amount = parseFloat(
            donation_amount[0].querySelector("input").value
        );
        const amount_noakhali = parseFloat(
            document.getElementById("amount-noakhali").innerText
        );
        const total_coin = parseFloat(
            document.getElementById("total-coin").innerText
        );

        const new_noakhali_amount = amount + amount_noakhali;
        const my_new_total_coin = total_coin - amount;

        document.getElementById("amount-noakhali").innerText =
            new_noakhali_amount;

        document.getElementById("total-coin").innerText = my_new_total_coin;
        donation_amount[0].querySelector("input").value = "";

        modal_congrates(card1.querySelector("h2").innerText);

        transaction_history(amount, card1.querySelector("h2").innerText);
    }
});

// Card 2
const card2 = document.getElementById("card-2");
donation_amount[1].querySelector("button").addEventListener("click", () => {
    if (
        isNaN(donation_amount[1].querySelector("input").value) === true ||
        donation_amount[1].querySelector("input").value <= 0
    ) {
        modal_error("Please enter positive integer value");
    } else if (
        parseFloat(document.getElementById("total-coin").innerText) <
        donation_amount[1].querySelector("input").value
    ) {
        modal_error("Amount can not be greater then main balance!");
    } else {
        const amount = parseFloat(
            donation_amount[1].querySelector("input").value
        );
        const amount_feni = parseFloat(
            document.getElementById("amount-feni").innerText
        );
        const total_coin = parseFloat(
            document.getElementById("total-coin").innerText
        );

        const new_feni_amount = amount + amount_feni;
        const my_new_total_coin = total_coin - amount;

        document.getElementById("amount-feni").innerText = new_feni_amount;

        document.getElementById("total-coin").innerText = my_new_total_coin;
        donation_amount[1].querySelector("input").value = "";

        modal_congrates(card2.querySelector("h2").innerText);
        transaction_history(amount, card2.querySelector("h2").innerText);
    }
});

// Card 3
const card3 = document.getElementById("card-3");
donation_amount[2].querySelector("button").addEventListener("click", () => {
    if (
        isNaN(donation_amount[2].querySelector("input").value) === true ||
        donation_amount[2].querySelector("input").value <= 0
    ) {
        modal_error("Please enter positive integer value");
    } else if (
        parseFloat(document.getElementById("total-coin").innerText) <
        donation_amount[2].querySelector("input").value
    ) {
        modal_error("Amount can not be greater then main balance!");
    } else {
        const amount = parseFloat(
            donation_amount[2].querySelector("input").value
        );
        const amount_quota = parseFloat(
            document.getElementById("amount-quota").innerText
        );
        const total_coin = parseFloat(
            document.getElementById("total-coin").innerText
        );

        const new_quota_amount = amount + amount_quota;
        const my_new_total_coin = total_coin - amount;

        document.getElementById("amount-quota").innerText = new_quota_amount;

        document.getElementById("total-coin").innerText = my_new_total_coin;
        donation_amount[2].querySelector("input").value = "";

        modal_congrates(card3.querySelector("h2").innerText);
        transaction_history(amount, card3.querySelector("h2").innerText);
    }
});

// Transaction history writter function
function transaction_history(amount, h2_text) {
    const div = document.createElement("div");
    div.classList.add(
        "flex",
        "flex-col",
        "gap-4",
        "p-4",
        "sm:p-6",
        "md:p-8",
        "rounded-lg",
        "border",
        "border-strock"
    );
    const h2 = document.createElement("h2");
    h2.classList.add("text-text1", "font-laxend", "font-bold", "sm:text-xl");
    h2.innerText = amount + " " + h2_text;
    const p = document.createElement("p");
    p.classList.add("text-text2", "font-light", "text-base");
    p.innerText = "Date: " + Date();
    div.appendChild(h2);
    div.appendChild(p);
    history_section.appendChild(div);
}

// Show Custom modal
// Congrates modal
function modal_congrates(description) {
    const myModal = document.getElementById("my_modal_1");
    myModal.querySelector("h3").innerText = "Congrates!";
    myModal.querySelector("img").classList.add("block");
    myModal.querySelector("img").classList.remove("hidden");
    myModal.querySelectorAll("p")[0].innerText = description;
    myModal.querySelectorAll("p")[1].innerText = "Successful";
    myModal.getElementsByTagName("button")[0].innerText = "Close Confirmation";
    myModal.showModal();
}

// Error modal
function modal_error(description) {
    const myModal = document.getElementById("my_modal_1");
    myModal.querySelector("h3").innerText = "Invalid Input";
    myModal.querySelector("img").classList.add("hidden");
    myModal.querySelector("img").classList.remove("block");
    myModal.querySelectorAll("p")[0].innerText = description;
    myModal.querySelectorAll("p")[1].innerText = "Transaction Failed";
    myModal.getElementsByTagName("button")[0].innerText = "Close";
    myModal.showModal();
}
