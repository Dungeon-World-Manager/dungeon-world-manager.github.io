import jsPDF, { AcroFormTextField } from 'jspdf';

export function generateKey(str = '') {
	return String(str)
		.split('')
		.flatMap(char => {
			if (Math.random() < 0.5) return char;
			const rndNum = parseInt(Math.random() * 50) + 65;
			const charCode = rndNum > 25 + 65 ? charCode + 7 : charCode;
			const retChars = [String.fromCharCode(charCode), char];
			return Math.random() < 0.5 ? retChars : retChars.reverse();
		}, 2)
		.join('');
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
	{ label = 'Label', x = 0, y = 0, width = 100, height = 20, value = null }
) {
	const labelWidth = pdf.getTextWidth(label);
	pdf.rect(x, y, width, height);
	pdf.setFontSize(14);
	pdf.text(label, x + 2, y + 14);
	const textField = new AcroFormTextField();
	textField.fontSize = 14;
	textField.value = value ?? '';
	textField.x = x + labelWidth + 5;
	textField.y = y + 2;
	textField.width = width - labelWidth - 5;
	textField.height = height - 5;
	pdf.addField(textField);
}

/**
 *
 * @param {Object} char Character object
 */
export async function generatePdf(char) {
	const pdf = new jsPDF('p', 'px', 'letter');

	editTextBox(pdf, {
		label: 'Name',
		x: 10,
		y: 10,
		height: 20,
		width: 150,
		value: char.name,
	});
	editTextBox(pdf, {
		label: 'XP',
		x: 170,
		y: 10,
		height: 20,
		width: 60,
		value: char.xp,
	});

	pdf.save('Name of the pdf.pdf');
}
