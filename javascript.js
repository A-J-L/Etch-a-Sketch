const container = getElementById("container");

for (let row = 0; row < 16; row++) {
    for(let col = 0; col < 16; col++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        container.appendChild(cell);
    }
}