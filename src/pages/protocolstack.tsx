import React, { useState } from "react";
import { Button, Grid, Segment } from 'semantic-ui-react'
import './hourglass.css'; 

function App() {
    const [showPopup, setShowPopup] = useState(1);

    const togglePopup = (area:any) => {
      setShowPopup(area);
    };
  
    const areas = [
      {
        id: 1,
        left: 0,
        top: 0,
        width: 100,
        height: 30,
        text: 'Browser chat ...',
      },
      {
        id: 2,
        left: 0,
        top: 30,
        width: 100,
        height: 10,
        text: 'File Stream ...',
      },
      {
        id: 3,
        left: 0,
        top: 40,
        width: 100,
        height: 18,
        text: 'Routing, Congestion Control!',
      },
      {
        id: 4,
        left: 0,
        top: 57,
        width: 100,
        height: 15,
        text: 'Link Access Protocol, Forwarding Information Base, Pending Interest Table, Content Store... Responsible for caching, routing and forwarding!',
      },
      {
        id: 5,
        left: 0,
        top: 72,
        width: 100,
        height: 25,
        text: 'Ethernet, Wi-Fi, Cellular Networks, Satellite Networks, Bluetooth!',
      },
    ];
    const areas2 = [
        {
          id: 1,
          left: 0,
          top: 0,
          width: 100,
          height: 30,
          text: 'IP Browser chat ...',
        },
        {
          id: 2,
          left: 0,
          top: 30,
          width: 100,
          height: 10,
          text: 'IP File Stream ...',
        },
        {
          id: 3,
          left: 0,
          top: 40,
          width: 100,
          height: 18,
          text: 'IP Routing, Congestion Control!',
        },
        {
          id: 4,
          left: 0,
          top: 57,
          width: 100,
          height: 15,
          text: 'IP Link Access Protocol, Forwarding Information Base, Pending Interest Table, Content Store... Responsible for caching, routing and forwarding!',
        },
        {
          id: 5,
          left: 0,
          top: 72,
          width: 100,
          height: 25,
          text: 'IP Ethernet, Wi-Fi, Cellular Networks, Satellite Networks, Bluetooth!',
        },
      ];

   
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("Show IP Image");

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
    setButtonLabel(showFirstImage ? "Show NDN Image" : "Show IP Image");
  };

  return (
    <div>
        <Grid>
            <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                <Segment>
                <div>
        {showFirstImage ? (
            <div className="image-container">
            <img className="image" src="NDNhourglass.png" alt="First Image" />
            {areas.map((area) => (
            <div
            key={area.id}
            className="area"
            style={{
                left: `${area.left}%`,
                top: `${area.top}%`,
                width: `${area.width}%`,
                height: `${area.height}%`
            }}
            onMouseEnter={() => togglePopup(area.id)}
            onMouseLeave={() => togglePopup(null)}
            >
            {showPopup === area.id && (
                <div className="popup" style={{
                    left: `${area.left + area.width}%`,
                    top: `${area.top}%`,
                    transform: 'translateY(-50%)',
                  }}>
                <p>{area.text}</p>
                </div>
            )}
            
            </div>
        ))} 
            </div>
        ) : (
            <div className="image-container">
            <img className="image" src="IPhourglass.png" alt="Second Image" />
            {areas2.map((area) => (
            <div
            key={area.id}
            className="area"
            style={{
                left: `${area.left}%`,
                top: `${area.top}%`,
                width: `${area.width}%`,
                height: `${area.height}%`
            }}
            onMouseEnter={() => togglePopup(area.id)}
            onMouseLeave={() => togglePopup(null)}
            >
            {showPopup === area.id && (
                <div className="popup" style={{
                  left: `${area.left + area.width}%`,
                  top: `${area.top}%`,
                  transform: 'translateY(-50%)',
                }}>
                <p>{area.text}</p>
                </div>
            )}
            
            </div>
        ))} 
            
            </div>
        )}
        
      </div>
    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
       
      
      
      

      <div>
      <Button content="red"  onClick={toggleImage}>{buttonLabel}</Button>
      </div>

      

    </div>
  );
}

export default App;