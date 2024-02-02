import { PDFViewer } from "@react-pdf/renderer";
import PDFDocument from "../Components/PDFDoucment";

const Test = () => {
  return (
    <PDFViewer showToolbar={false} style={{ height: "100vh", width: "100vw" }}>
      <PDFDocument />
    </PDFViewer>
  );
};

export default Test;
