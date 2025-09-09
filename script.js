const fileInput = document.querySelector("#file-input"); // Hidden button
const chooseButton = document.querySelector("#choose-button"); // Visual button
const currentFile = document.querySelector("#current-file"); // Current file name
const canvas = document.querySelector("#image-canvas"); // Canvas to display image
const ctx = canvas.getContext("2d"); // Context for canvas

console.log(fileInput, chooseButton);

chooseButton.addEventListener("click", function () {
    fileInput.click(); // Trigger file input when clicking the visible button
});

fileInput.addEventListener("change", function () {
    currentFile.textContent = fileInput.files[0].name; // Display the file name

    const imageURL = URL.createObjectURL(fileInput.files[0]); // Create a blob
    let image = new Image(); // Create an image object in memory
    image.src = imageURL; // Assign the URL of the blob to be the loaded image

    image.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear current canvas
        canvas.width = image.width; // Change canvas size to be the same size as the image
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0); // Draw the image onto the canvas

        ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
});
