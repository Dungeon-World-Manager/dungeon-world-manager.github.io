import React from 'react';
// import { Link, useHistory } from "gatsby";

const PdfViewer = props => {
    // const { params } = useParams();
    return (
        <React.Fragment>
            {/* {{ pdf in iframe }} */}
            <iframe
                style={{ 'min-height': '100vh' }}
                src={props.location.state.pdfSrc}
                width='100%'
                height='auto'
            />
        </React.Fragment>
    );
};

export default PdfViewer;
