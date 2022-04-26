import jsPDF, {
  AcroFormTextField,
  AcroFormCheckBox,
  AcroFormComboBox,
} from "jspdf";

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

function baseStatBox(pdf, {}) {}

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

function editRaceInfo(
  pdf,
  { label = "Label", x = 0, y = 0, width = 100, height = 20, value = null }
) {
  // checkbox
  const checkbox = new AcroFormCheckBox();
  checkbox.fontSize = 10;
  checkbox.width = 15;
  checkbox.height = 15;
  checkbox.x = x + 3;
  checkbox.y = y + 2;
  pdf.addField(checkbox);

  // race name
  const checkboxWidth = 20;
  const labelField = new AcroFormTextField();
  pdf.setFontSize(14);
  labelField.fontSize = 14;
  labelField.value = label ?? "";
  labelField.x = x + checkboxWidth + 5;
  labelField.y = y + 2;
  labelField.width = width - checkboxWidth - 5;
  labelField.height = 20;
  pdf.addField(labelField);
  const textField = new AcroFormTextField();
  textField.fontSize = 10;
  textField.multiline = true;
  textField.value = value ?? "";
  textField.x = x + checkboxWidth + 5;
  textField.y = y + 23;
  textField.width = width - checkboxWidth - 5;
  textField.height = height - 23;
  pdf.addField(textField);

  // race description

  // header for race section
  const header = "Race";
  const headerWidth = pdf.getTextWidth(header);
  pdf.setFillColor(0, 0, 0);
  pdf.rect(x, y - 30, width, 20, "F");
  pdf.setFontSize(14);
  pdf.setTextColor("#FFFFFF");
  pdf.text(header, x + 10, y - 16);
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

/**
 *
 * @param {Object} char Character object
 */
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

  // set background color
  pdf.setFillColor(230, 231, 233);
  pdf.rect(0, 0, 500, 200, "F");

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

  // const checkbox = new AcroFormCheckBox();

  // Race info
  editRaceInfo(pdf, {
    label: char.race,
    x: 270,
    y: 100,
    height: 120,
    width: 150,
    value: char.raceDesc,
  });

  pdf.save("Name of the pdf.pdf");
}
