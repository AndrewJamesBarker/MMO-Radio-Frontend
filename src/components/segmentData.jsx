import {useState, useEffect} from "react";

export default function SegmentData() {
  const [segments, setSegments] = useState([]);

  useEffect(()=> {
    const getSegments = async () => {
      try{
        const response = await fetch('http://localhost:8888/api/segments');
        const data = await response.json();
        setSegments(data);
      }
      catch(error) {
        console.error('Error:', error);
      }
    };
    getSegments();
  }, []);


  if (segments.length === 0) {
    return <div></div>;
  }



const recentSegment = segments[0];

const segmentDataObject = JSON.parse(recentSegment.segment_data);
const headline = segmentDataObject.headline;
const joke = segmentDataObject.joke;
const content = segmentDataObject.content;

// lego block image from adobe stock

return (
  <div className="basic-container segmentSection">
     
    <h1 className="dailySegment">Featured <span className="orange-text">SEGMENT </span></h1>
    {/* <img className="lego-block" src="images/orange_lego.png" width="100" alt="an orange six by two piece of lego"></img> */}
    <div key={recentSegment.id}>
      <h2 className="segmentTitle">'{recentSegment.title}'</h2>
      <img className="segmentImage" src={`http://localhost:8888/storage/${recentSegment.image}`} width="550"></img>
      {/* <h4 className="segmentHeadline">{headline}</h4> */}
      <p className="segment-content">
        '{joke || content}'
      </p>
    </div>
    <img className="lego-block" src="images/orange_lego.png" width="100" alt="an orange six by two piece of lego"></img>
  </div>
)

}