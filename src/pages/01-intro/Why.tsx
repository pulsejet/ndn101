import React from 'react';
import ExpandableBubble from './ExpandableBubble';

export default function Why() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ExpandableBubble
        label="Security"
        content="NDN uses names to identify data rather than a location, making it difficult for attackers to intercept data packets."
      />
      <ExpandableBubble
        label="integrity and confidentiality"
        content="NDN uses cryptographic techniques to ensure data integrity and confidentiality, making it more secure than traditional IP networks."
      />

      <ExpandableBubble
        label="In-Network Caching"
        content="NDN enables caching at the network layer, allowing popular data to be stored closer to the user, reducing the need for long-distance data transfers."
      />
      <ExpandableBubble
        label="Efficiency"
        content="NDN caching improves network efficiency and reduces bandwidth consumption, particularly for popular content."
      />

      <ExpandableBubble
        label="Distributed forwarding"
        content="NDN uses a distributed forwarding approach that can leverage the computing power of edge devices to reduce the load on the network core."
      />
      <ExpandableBubble
        label="Scalability"
        content="NDN distributed forwarding approach enables more efficient routing and reduces the risk of network congestion."
      />

      <ExpandableBubble
        label="Content-centric"
        content="NDN is designed to be content-centric rather than host-centric, which means that data can be accessed and shared independently of its location or origin."
      />
      <ExpandableBubble
        label="Flexibility"
        content="NDN is content-centric, this enables more flexible and dynamic content distribution, and supports new applications and use cases such as IoT and edge computing."
      />
    </div>
  );
}
