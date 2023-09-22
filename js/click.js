document.getElementById('btn').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
    }
});

document.getElementById('btn_menu').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
    }
});

document.getElementById('toggleButton').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        this.click();
    }
});