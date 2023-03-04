import { useCallback } from "react";
import { useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection
} from 'reactflow';


import "./PacketDemo.scss"
import "reactflow/dist/style.css";

const arrowMarker = {
  type: 'arrow',
  // strokeWidth: 2,
  width: 20,
  height: 20
}

const MAX_STEP = 5
export default function PacketDemo() {
  
  const [step, setStep] = useState(0);
  var interestHidden = [false,false,false,true,true,true];
  var dataHidden = [true,true,true,false,false,false];
  var interestX = [0, 300, 600, 600, 300, 0];
  var dataX = [0, 300, 600, 600, 300, 0];
  var edge1Animated = [true, false, false, false, true, false];
  var edge2Animated = [false, true, false, true, false, false];
  useEffect(() => {
    n[3].hidden=interestHidden[step];
    n[4].hidden=dataHidden[step];
    n[3].position.x = interestX[step];
    n[4].position.x = dataX[step];
    e[0].animated = edge1Animated[step];
    e[1].animated = edge2Animated[step];
    if (step < 3) {
      e[0].source = '1';e[0].target = '2';
      e[1].source = '2';e[1].target = '3';
      n[1].sourcePosition = 'right';
      n[1].targetPosition = 'left';
    } else {
      e[0].source = '2';e[0].target = '1';
      e[1].source = '3';e[1].target = '2';
      n[1].sourcePosition = 'left';
      n[1].targetPosition = 'right';
    }
    setNodes(n)
    setEdges(e);
  }, [step]);
  
  
  var e = [
    { id: 'e1-2', source: '1', target: '2', markerEnd: arrowMarker, animated: true, style: {strokeWidth: 5}},
    { id: 'e2-3', source: '2', target: '3', markerEnd: arrowMarker, animated: false, style: {strokeWidth: 5}},
  ];
  var n = [
    { id: '1', sourcePosition: 'right', targetPosition: 'right', position: { x: 0, y: 100 }, data: { label: 'Consumer' }, draggable: false },
    { id: '2', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 100 }, data: { label: 'Router' }, draggable: false },
    { id: '3', sourcePosition: 'left', targetPosition: 'left', position: { x: 600, y: 100 }, data: { label: 'Producer' }, draggable: false },
    { id: 'interest', style: { borderRadius: 20 , backgroundColor: '#ffdaba'}, hidden: true, sourcePosition: 'bottom', targetPosition: 'bottom', position: { x: 0, y: 16 }, data: { label: 'Interest: 1' }, draggable: false },
    { id: 'data', style: { borderRadius: 20, backgroundColor: '#a6e6ff'}, hidden: true, sourcePosition: 'bottom', targetPosition: 'bottom', position: { x: 600, y: 16 }, data: { label: 'Data: 1' }, draggable: false },
  ];
  const [nodes, setNodes] = useState(n);
  const [edges, setEdges] = useEdgesState(e);
  // const [nodes, setNodes, onNodesChange] = useState(n);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(e);

  // setNodes({ id: '1', sourcePosition: 'right', targetPosition: 'right', position: { x: 0, y: 100 }, data: { label: 'Consumer' }, draggable: false },
  // { id: '2', sourcePosition: 'right', targetPosition: 'left', position: { x: 300, y: 100 }, data: { label: 'Router' }, draggable: false },
  // { id: '3', sourcePosition: 'left', targetPosition: 'left', position: { x: 600, y: 100 }, data: { label: 'Producer' }, draggable: false },
  // { id: 'interest', style: { borderRadius: 20, backgroundColor: '#ffdaba'}, hidden: interestHidden, sourcePosition: 'bottom', targetPosition: 'bottom', position: { x: 0, y: 25 }, data: { label: 'Interest: prefix/1' }, draggable: false },
  // { id: 'data', hidden: dataHidden, sourcePosition: 'bottom', targetPosition: 'bottom', position: { x: 600, y: 20 }, data: { label: 'Data' }, draggable: false },);
  // setEdges({ id: 'e1-2', source: '1', target: '2', markerEnd: arrowMarker},
  // { id: 'e2-3', source: '2', target: '3', markerEnd: arrowMarker});
  

  
  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <div class="container">
      <div class="packet-container" style={{height: 500}}>
      <button class="button" onClick={()=>setStep(step===0?step:step-1)}>Previous</button>
      <button class="button" onClick={()=>setStep(step < MAX_STEP?step+1 : step)}>Next</button>
      <progress class="progress is-primary" value={step} max="5">0%</progress>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
      >
        <Background />
      </ReactFlow>
    </div>
    </div>
  );
}

