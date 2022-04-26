import React from 'react';
// import { Link, useHistory } from "gatsby";
import playsheetsPdf from '../../resources/dungeon-world-playsheets.pdf';
import overviewPdf from '../../resources/dungeon-world-overview.pdf';
import { Button, Grid } from 'semantic-ui-react';

const PdfViewer = props => {
	// const { params } = useParams();
	const [currentPdf, setCurrentPdf] = React.useState('overview');

	function changeCurrentPdf() {
		setCurrentPdf(this);
	}

	const overviewPdfFallback =
		'https://drive.google.com/file/d/0B8_Fz4m5hcoiTXpTbklDOF9iUHc/preview?resourcekey=0-xI_68aH1lllySOdEovKvPQ';

	const pdfFile = getPdfFile();

	function getPdfFile() {
		if (currentPdf === 'overview') return overviewPdf;
		else if (currentPdf === 'playsheets') return playsheetsPdf;
	}

	return (
		<React.Fragment>
			{/* {{ pdf in iframe }} */}
			<Grid columns={1}>
				<Grid.Column>
					<Button onClick={changeCurrentPdf.bind('overview')}>
						Overview
					</Button>
					<Button onClick={changeCurrentPdf.bind('playsheets')}>
						Playsheets
					</Button>
				</Grid.Column>
				<Grid.Column>
					<iframe
						style={{ minHeight: '100vh' }}
						src={pdfFile}
						width='100%'
						height='auto'
					/>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	);
};

export default PdfViewer;
