import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const captureScreenshot = async (
  canvas,
  selectedOptions,
  selectedImage
) => {
  let pdf = await html2canvas(canvas).then((canvas) => {
    // Capture the screenshot
    var imgData = canvas.toDataURL("image/png", 0.85);

    // Create a new instance of jsPDF
    var pdf = new jsPDF();

    // Calculate the dimensions of the new page based on the screenshot
    // const screenshotHeight = 100; // Adjust to the desired page width (210mm in this case)

    // Define scaling factors
    const logoScale = 0.6; // Scale factor for the logo
    const selectedImageScale = 0.6; // Scale factor for the selected image
    const screenshotScale = window.innerWidth < 480 ? 2 : 0.93; // Scale factor for the screenshot

    // Calculate the scaled dimensions of the logo
    const logoWidth = 0 * logoScale; // 50 is the original width of the logo
    const logoHeight = 15 * logoScale; // 15 is the original height of the logo

    // Calculate the scaled dimensions of the selected image
    const selectedImageWidth = 160 * selectedImageScale; // 160 is the original width of the selected image
    const selectedImageHeight = 0 * selectedImageScale; // 240 is the original height of the selected image

    // Calculate the scaled dimensions of the screenshot
    const screenshotWidth = 0 * screenshotScale; // 190 is the original width of the screenshot
    const screenshotHeight = 100 * screenshotScale; // 240 is the original height of the screenshot

    // Add the logo to the first page with scaled dimensions
    pdf.addImage("/seacat-logo-black.png", "PNG", 80, 10, logoWidth, logoHeight, {
      align: "center",
    });

    // Create a canvas to resize the image
    pdf.addImage(imgData, "PNG", 10, 30, screenshotWidth, screenshotHeight);
    // pdf.addPage();
    // pdf.setFontSize(16);
    // pdf.text("Floor Plan", 100, 15, { align: "center" });

    // if (selectedImage) {
    //   // Add the selected image to the second page with scaled dimensions
    //   pdf.addImage(
    //     selectedImage,
    //     "PNG",
    //     20,
    //     30,
    //     selectedImageWidth,
    //     selectedImageHeight
    //   );
    // }

    // Add a new page
    pdf.addPage();

    const optionsList = Object.entries(selectedOptions).map(([key, value]) => {
      let optionName = value;

      if (value && typeof value === "object" && value.option) {
        // For single-select options, get the name from the object
        optionName = value.option;
      }

      return `${key}: ${optionName}`;
    });

    pdf.setFontSize(16); // Set the font size for the heading
    pdf.text("Selected Menu Options", 105, 20, { align: "center" });

    // Add the options list
    pdf.setFontSize(14); // Set the font size for the options
    pdf.text(optionsList.join("\n"), 10, 40);

    return pdf;
  });

  return pdf;
};
