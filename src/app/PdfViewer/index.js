import React from "react";
// import { Link, useHistory } from "gatsby";
import { useParams } from "gatsby";

const PdfViewer = (props) => {
	// const { params } = useParams();
	return (
		<React.Fragment>
			{/* {{ pdf in iframe }} */}
			{props.pdfSrc}
			<iframe
				style={{ "min-height": "100vh" }}
				src={props.pdfSrc}
				width="100%"
				height="auto"
			/>
		</React.Fragment>
	);
};

export default PdfViewer;
