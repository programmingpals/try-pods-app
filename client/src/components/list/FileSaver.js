import React from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

export default function FileSaver(props) {

  function downloadTxtFile(listData) {
    const doc = new jsPDF();
    doc.text(listData, 10, 10);
    const pdfBlob = doc.output("blob");
    saveAs(pdfBlob, `${listData}.pdf`);
  }

  return (
    <button onClick={() => downloadTxtFile(props.listDetails.name)}>
      Save as PDF
    </button>
  );
}
