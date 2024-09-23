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

// Show Custom modal
function modal(h3_text, description, error_succes_msg, btn_text) {
    const myModal = document.getElementById("my_modal_1");
    myModal.querySelector("h3").innerText = h3_text;
    myModal.querySelectorAll("p")[0].innerText = description;
    myModal.querySelectorAll("p")[1].innerText = error_succes_msg;
    myModal.getElementsByTagName('button')[0].innerText = btn_text;
    myModal.showModal();
}
