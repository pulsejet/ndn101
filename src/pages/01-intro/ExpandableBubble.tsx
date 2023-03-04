import React, { useState } from 'react';
import './ExpandableBubble.css';

interface ExpandableBubbleProps {
  label: string;
  content: string;
}

function ExpandableBubble(props: ExpandableBubbleProps) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <div className={`bubble ${expanded ? 'expanded' : ''}`} onClick={toggleExpanded}>
      <div className="bubble-label">{props.label}</div>
      <div className="bubble-content">{props.content}</div>
    </div>
  );
}

export default ExpandableBubble;