let datatrendForm = document.querySelector('form');

function resetForm() {
    let resetButton = document.querySelector("#reset");
    resetButton.addEventListener('click', () => {
        if (confirm("Do you want to reset?")) {
            datatrendForm.reset();
        }
    })
}

function submitForm() {
    datatrendForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
}