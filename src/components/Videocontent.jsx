

import React, { useState } from 'react';
import { MdLockOutline } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import imgsorce from "../assets/60111.jpg";


// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';

  
  
const Videocontent = () => {
  const [isExpanded, setExpanded] = useState(false);
//   const navigate  = useNavigate ();


  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  const handleVideoClick = (url) => {
    // Redirect to another page when the video is clicked
    // navigate(url);
    window.location.href = url;
  };

  const videos = [
    {
      id: 1,
      title: 'Video 1',
      url:"./content",
    },
    {
      id: 2,
      title: 'Video 2',
      url: "./content",
    },
    {
      id: 3,
      title: 'Video 3',
      url: "./content",
    },
    {
      id: 4,
      title: 'Video 4',
      url: "./content",
    },
    // Add more video objects as needed
  ];

  return (
    <div className={`video-bar ${isExpanded ? 'expanded' : ''}`}>
      <div className="video-bar-header" onClick={handleToggle}>
        <h2>Chapter 1</h2>
        <span className={`toggle-icon ${isExpanded ? 'expanded' : ''}`}></span>
      </div>
      {isExpanded && (
        <div className="video-content">
          {videos.map((video) => (
            <div key={video.id} className="video-wrapper">
              <div className="title-wrapper">
                <h3 onClick={() => handleVideoClick(video.url)}>{video.title} </h3> 
                <h6><MdLockOutline/></h6>  {/* MdLockOpen    this icon will use when unlock */} 
              </div>
                {/* <video controls>
                  <source src={video.url} type="video/mp4" />
                </video> */}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};



// const Videocontent = () => {
//     const [open, setOpen] = useState(false);

//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const videos = [
//     { id: 1, title: 'Video 1', url: 'https://example.com/video1.mp4' },
//     { id: 2, title: 'Video 2', url: 'https://example.com/video2.mp4' },
//     { id: 3, title: 'Video 3', url: 'https://example.com/video3.mp4' },
//   ];

//   const handleVideoChange = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <>
//     {/* <div>
//       <h2>Video Dropdown Bar</h2>
//       <select
//             className='containers large'
//             value={selectedVideo ? selectedVideo.id : ''}
//             onChange={(e) => {
//             const selectedVideoId = parseInt(e.target.value);
//             const video = videos.find((v) => v.id === selectedVideoId);
//             handleVideoChange(video);
//             }}
//         >
//             <option value=""><h2>Chapter 1</h2></option>
//             {videos.map((video) => (
//             <option key={video.id} value={video.id}>
//                 {video.title}
//             </option>
//             ))}
//       </select>
//       {selectedVideo && (
//         <div className='box'>
//           <h3 className='containers'>{selectedVideo.title}</h3>
//           <video controls>
//             <source src={selectedVideo.url} type="video/mp4" />
//           </video>
//         </div>
//       )}
//     </div> */}
//     <div>
//       {/*  */}
//       <Button
//         onClick={() => setOpen(!open)}
//         aria-controls="example-collapse-text"
//         aria-expanded={open}
//       >
//         Class 1
//       </Button>
//       <Collapse in={open}>
//         <div id="example-collapse-text">
//           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//           terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//           labore wes anderson cred nesciunt sapiente ea proident.
//         </div>
//       </Collapse>
//       {/*  */}
//     </div>
//     </>
//   );
// };

export default Videocontent;