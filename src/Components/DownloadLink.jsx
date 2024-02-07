import { pdf } from "@react-pdf/renderer";
import PDFDocument from "./PDFDoucment";
import useMenuStore from "../Utils/menuStore";
import useColorStore from "../Utils/store";
import useImageStore from "../Utils/imageStore";

const DownloadLink = ({ selectedModel }) => {
  const { selectedOptions } = useMenuStore();
  const { colors } = useColorStore();
  const { selectedImage } = useImageStore();

  const downloadClick = async () => {
    let element = (
      <PDFDocument
        selectedOptions={selectedOptions}
        colors={colors}
        selectedImage={selectedImage}
        model={selectedModel}
      />
    );

    const blob = await pdf(element).toBlob();
    const url = window.URL || window.webkitURL;
    const link = url.createObjectURL(blob);
    console.log(link);
    var anchorElement = document.createElement("a");
    anchorElement.setAttribute("download", "Document.pdf");
    anchorElement.setAttribute("href", link);
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <button className="button-pdf" onClick={downloadClick}>
      Download PDF
    </button>
  );
};

export default DownloadLink;
