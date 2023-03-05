import React from 'react';
import ExpandableBubble from './ExpandableBubble';

export default function Why() {
  return (
    <div className="bubbles-container">
      <ExpandableBubble
        label="Security"
        content="NDN provides data-centric security where it secures data directly rather than relying on securing the channels that transmit the data."
      />

      <ExpandableBubble
        label="Caching"
        content="NDN enables caching at the network layer, allowing more-used data to be stored closer to the user, reducing the need for long-distance data transfers, and increasing the efficiency"
      />
       {/* <ExpandableBubble
        label="Efficiency"
        content="NDN caching improves network efficiency and reduces bandwidth consumption, particularly for popular content."
      /> */}

      <ExpandableBubble
        label="Distributed Forwarding"
        content="NDN uses a distributed forwarding approach that can leverage the computing power of edge devices to reduce the load on the network core, and provide scalability"
      />
      {/* <ExpandableBubble
        label="Scalability"
        content="NDN distributed forwarding approach enables more efficient routing and reduces the risk of network congestion."
      /> */}

      <ExpandableBubble
        label="Data Centricity"
        content="NDN is designed to be content-centric rather than host-centric, which means that data can be accessed and shared independently of its location or origin, providing felxibility"
      />
      {/* <ExpandableBubble
        label="Flexibility"
        content="NDN is content-centric, this enables more flexible and dynamic content distribution, and supports new applications and use cases such as IoT and edge computing."
      /> */}
    </div>
  );
}
