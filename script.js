
const btnYes = document.getElementById("Yes");
const btnNo = document.getElementById("No");

// YES: Go to Page 2
if (btnYes) {
    btnYes.addEventListener("click", function () {
        window.location.href = "./yes.html";
    });
}

// NO: Run away when the mouse approaches
if (btnNo) {
    function moveButton() {
        const margin = 10;
        const maxX = Math.max(
            margin,
            window.innerWidth - btnNo.offsetWidth - margin
        );
        const maxY = Math.max(
            margin,
            window.innerHeight - btnNo.offsetHeight - margin
        );

        const x = margin + Math.random() * (maxX - margin);
        const y = margin + Math.random() * (maxY - margin);

        btnNo.style.position = "fixed";
        btnNo.style.left = `${x}px`;
        btnNo.style.top = `${y}px`;
        btnNo.style.zIndex = "9999";
    }

    btnNo.addEventListener("pointerenter", moveButton);

    btnNo.addEventListener("click", function (event) {
        event.preventDefault();
        moveButton();
    });

    window.addEventListener("resize", function () {
        if (btnNo.style.position === "fixed") {
            moveButton();
        }
    });
}
