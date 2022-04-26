import jsPDF, { AcroFormTextField, AcroFormCheckBox } from "jspdf";

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

function title(
  pdf,
  { label = "Label", x = 0, y = 0, width = 100, height = 20 }
) {
  pdf.rect(x, y, width, height);
  pdf.setFontSize(14);
  pdf.text(label, x + 2, y + 14);
}

function blackRec(pdf, { x = 0, y = 0, width = 100, height = 20 }) {
  pdf.rect(x, y, width, height, "F");
  pdf.setFontSize(14);
}

function damageBox(
  pdf,
  { label = "Label", x = 0, y = 0, radius = 0, value = null }
) {
  const titleWidth = pdf.getTextWidth(label);
  pdf.setLineWidth(1);
  pdf.setDrawColor(0);
  pdf.setFillColor(255, 255, 255);
  pdf.circle(x, y, radius, "DF");
  pdf.setFontSize(14);
  pdf.text(label, x - 11, y - 10);

  const textField = new AcroFormTextField();
  textField.fontSize = 14;
  textField.value = value ?? "";
  textField.x = x + titleWidth - 40;
  textField.y = y - 5;
  textField.width = radius - titleWidth + 30;
  textField.height = radius - 3;
  pdf.addField(textField);
}

function checkbox(pdf, { x = 0, y = 0, width = 0, height = 0 }) {
  const checkbox = new AcroFormCheckBox();
  checkbox.fontSize = 10;
  checkbox.width = width;
  checkbox.height = height;
  checkbox.x = x;
  checkbox.y = y;
  pdf.addField(checkbox);
}

export async function generatePdf(char) {
  const pdf = new jsPDF("p", "px", "letter");

  editTextBox(pdf, {
    label: "Name",
    x: 10,
    y: 10,
    height: 20,
    width: 150,
    value: char.name,
  });
  editTextBox(pdf, {
    label: "XP",
    x: 170,
    y: 10,
    height: 20,
    width: 60,
    value: char.xp,
  });

  title(pdf, {
    label: "Strength",
    x: 70,
    y: 70,
    height: 20,
    width: 130,
  });

  blackRec(pdf, {
    x: 70,
    y: 90,
    height: 40,
    width: 130,
  });

  damageBox(pdf, { label: "STR", x: 105, y: 125, radius: 30, value: char.str });

  checkbox(pdf, { x: 150, y: 95, width: 10, height: 10 });

  pdf.save("Name of the pdf.pdf");
}
