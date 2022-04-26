import jsPDF, { AcroFormTextField, AcroFormCheckBox } from "jspdf";
import { Checkbox } from "semantic-ui-react";

export function generateKey(str = "") {
  return String(str)
    .split("")
    .flatMap((char) => {
      if (Math.random() < 0.5) return char;
      const rndNum = parseInt(Math.random() * 50) + 65;
      const charCode = rndNum > 25 + 65 ? charCode + 7 : charCode;
      const retChars = [String.fromCharCode(charCode), char];
      return Math.random() < 0.5 ? retChars : retChars.reverse();
    }, 2)
    .join("");
}

/**
 * @description This edit text box creates a label and text box for users to type in.
 * @param {jsPdf} pdf Reference to the pdf document
 * @param {Object} param1 Parts for the edit box
 * @param {Object} param1.label This is the label for the text box
 * @param {Object} param1.x This is the x position from upper left
 * @param {Object} param1.y This is the y position from upper left
 * @param {Object} param1.width This is the width
 * @param {Object} param1.height This is the height
 * @param {Object} param1.value This is the starting value
 */
function editTextBox(
  pdf,
  { label = "Label", x = 0, y = 0, width = 100, height = 20, value = null }
) {
  const labelWidth = pdf.getTextWidth(label);
  pdf.rect(x, y, width, height);
  pdf.setFontSize(14);
  pdf.text(label, x + 2, y + 14);
  const textField = new AcroFormTextField();
  textField.fontSize = 14;
  textField.value = value ?? "";
  textField.x = x + labelWidth + 5;
  textField.y = y + 2;
  textField.width = width - labelWidth - 5;
  textField.height = height - 5;
  pdf.addField(textField);
}

function editCheckBox(
  pdf,
  {
    label = "Label",
    desc = "Description",
    x = 0,
    y = 0,
    width = 100,
    height = 100,
    value = null,
  }
) {
  const checkWidth = pdf.getTextWidth(label);
  pdf.text(label, x + 15, y + 3);
  pdf.text(desc, x + 15, y + 15);
  //   pdf.rect(x, y, length, width);
  //   pdf.line(x, y, x + length, y + width);
  //   pdf.line(x, y + length, x + width, y);
  const checkbox = new AcroFormCheckBox();
  checkbox.fontSize = 0;
  checkbox.value = value ?? "";
  checkbox.x = x + 5;
  checkbox.y = y + 2;
  checkbox.width = width;
  checkbox.height = height;
  pdf.addField(checkbox);
}

export async function generatePdf(char) {
  const pdf = new jsPDF("p", "px", "letter");

  //   editTextBox(pdf, {
  //     label: "Name",
  //     x: 10,
  //     y: 10,
  //     height: 20,
  //     width: 150,
  //     value: char.name,
  //   });
  //   editTextBox(pdf, {
  //     label: "XP",
  //     x: 170,
  //     y: 10,
  //     height: 20,
  //     width: 60,
  //     value: char.xp,
  //   });

  editCheckBox(pdf, {
    label: "Chaotic",
    desc: "eschew a convention of the civilized world.",
    x: 170,
    y: 40,
    height: 10,
    width: 10,
    value: null,
  });

  pdf.save("Name of the pdf.pdf");
}
