import React, { useState } from "react";
import './ProtocolStack.scss';

export default function App() {
  const [showPopup, setShowPopup] = useState(1);

  const togglePopup = (area: any) => {
    setShowPopup(area);
  };

  const areas = [
    {
      id: 1,
      left: 0,
      top: 0,
      width: 100,
      height: 30,
      text: 'Distributed applications',
    },
    {
      id: 2,
      left: 0,
      top: 30,
      width: 100,
      height: 10,
      text: 'State Vector Sync, PSync, ChronoSync',
    },
    {
      id: 3,
      left: 0,
      top: 40,
      width: 100,
      height: 18,
      text: 'Named Data Networking',
    },
    {
      id: 4,
      left: 0,
      top: 57,
      width: 100,
      height: 15,
      text: 'Ethernet, Wi-Fi, TCP / UDP',
    },
    {
      id: 5,
      left: 0,
      top: 75,
      width: 100,
      height: 30,
      text: 'Cables, Radio',
    },
  ];
  const areas2 = [
    {
      id: 1,
      left: 0,
      top: 0,
      width: 100,
      height: 30,
      text: 'HTTP, FTP, SMTP, DNS, DHCP, ...',
    },
    {
      id: 2,
      left: 0,
      top: 30,
      width: 100,
      height: 10,
      text: 'TCP, UDP, SCTP, QUIC, ...',
    },
    {
      id: 3,
      left: 0,
      top: 40,
      width: 100,
      height: 18,
      text: 'Internet Protocol',
    },
    {
      id: 4,
      left: 0,
      top: 57,
      width: 100,
      height: 15,
      text: 'Ethernet, Wi-Fi, ...',
    },
    {
      id: 5,
      left: 0,
      top: 75,
      width: 100,
      height: 30,
      text: 'Cables, Radio',
    },
  ];


  const [showFirstImage, setShowFirstImage] = useState(true);
  const [buttonLabel, setButtonLabel] = useState("Show IP Image");

  const toggleImage = () => {
    setShowFirstImage(!showFirstImage);
    setButtonLabel(showFirstImage ? "Show NDN Image" : "Show IP Image");
  };

  return (
    <div className="proto-hourglass">
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
                  }}>
                    <p>{area.text}</p>
                  </div>
                )}

              </div>
            ))}

          </div>
        )}

      </div>

      <div>
        <button className="btn button is-danger" onClick={toggleImage}>{buttonLabel}</button>
      </div>



    </div>
  );
}
