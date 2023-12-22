import React from 'react'; 
import cv from '../img/cv.png';
import { Navbar } from './Navbar';
import { Footer } from './footer';

function Resume() {
	function handleDownload() { 
		const link = document.createElement('a'); 
		link.href = cv; 
		link.setAttribute('download', 'cv.png'); 
		document.body.appendChild(link);
		link.click();
		 link.remove(); 
	}

	// function to save as pdf 

	const printContent = () => {
		window.print();
	  };

	return (
		<>
        <Navbar />
		<div className='background'>
			<div className='text-center'>
            <img src={cv} class="img-thumbnail" alt="..."/>

			</div>

</div>
<div className='background text-center'>
<button className='hoverover' onClick={handleDownload}> Download </button>
<ul></ul><br></br><button onClick={printContent} className='btn btn-primary btn-sm'>
          Print
        </button>
</div>
<Footer />
</>
);
}
export default Resume;

// import React from "react";
// import { Link } from "react-router-dom";
// import cv from "../../img/cv.png";


// function Resume() {
// 	function handleDownload() { 
// 		const link = document.createElement('a'); 
// 		link.href = curacaoImage; 
// 		link.setAttribute('download', 'curacao.png'); 
// 		document.body.appendChild(link);
// 		link.click();
// 		 link.remove(); 
// 	};
// 	return (

// <div className="background">
// 	<div className="text-center">
// <img src={cv} class="img-thumbnail" alt="Responsive center"/>
// <div>
// <button onClick={() => {DownloadFileAtUrl(PDF_FILE_URL)}}>Download PDF version</button>
// </div>
//  <div>
//  <button onClick={handleDownload}> Download image</button>

//  </div>

//   		<div>
//  			<div className='text-center'>
//  			<img src={cv}/>

//  			</div>

//  </div>
//  <div>
//  <button onClick={handleDownload}> Download image</button>
//  </div>

// </div>


// </div>	);
// };
// export default Resume;
{/* <img classname="img" src={cv}></img>  */}