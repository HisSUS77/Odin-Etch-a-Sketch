document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    let Gridsize;

    document.getElementById("submit").onclick = function() {
        Gridsize = parseInt(document.getElementById("UserGridSize").value);


        // Calculate grid dimensions
        let gridWidth = 400 / Gridsize;
        let gridHeight = 400 / Gridsize;

        for (let index = 0; index < Gridsize ** 2; index++) {
            const row = document.createElement("div");
            row.className = "block";
            row.style.height = gridHeight + 'px';
            row.style.width = gridWidth + 'px';

            // Adding effect when mouse hovers over the block
            row.addEventListener("click", () => {
                row.style.backgroundColor = "blue";
            });

            // Add it to container
            container.appendChild(row);
        }
    };
});
