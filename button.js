document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download-button");

  // Replace "your-pdf-file.pdf" with the actual URL or path to your PDF file
  const pdfFileUrl = "Vikram-Resume.pdf";

  downloadButton.addEventListener("click", function () {
    // Create an invisible anchor element
    const anchor = document.createElement("a");
    anchor.style.display = "none";

    // Set the href and download attributes
    anchor.href = pdfFileUrl;
    anchor.download = "Resume"; // Set the desired filename

    // Trigger a click event on the anchor element
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
  });
});
