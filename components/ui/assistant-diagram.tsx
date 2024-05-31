import React, { useRef, useEffect, useState } from 'react';
import * as go from 'gojs';

interface DiagramProps {
  newNodeData?: { key: string; color: string; param1: string; param2: string };
}

const Diagram: React.FC<DiagramProps> = ({ newNodeData }) => {
  const diagramRef = useRef<HTMLDivElement | null>(null);
  const diagramInstance = useRef<go.Diagram | null>(null);

  useEffect(() => {
    if (diagramRef.current && !diagramInstance.current) {
      const $ = go.GraphObject.make;
      const diagram = $(go.Diagram, diagramRef.current, {
        initialContentAlignment: go.Spot.Center,
        'undoManager.isEnabled': true,
      });

      // Define a port style for node linking
      function makePort(name: string, spot: go.Spot, output: boolean, input: boolean) {
        return $(
          go.Shape,
          'Circle',
          {
            fill: 'transparent',
            stroke: null,
            desiredSize: new go.Size(8, 8),
            alignment: spot,
            alignmentFocus: spot,
            portId: name,
            fromSpot: spot,
            toSpot: spot,
            fromLinkable: output,
            toLinkable: input,
            cursor: 'pointer',
          }
        );
      }

      // Define a simple Node template
      diagram.nodeTemplate = $(
        go.Node,
        'Auto',
        {
          locationSpot: go.Spot.Center,
        },
        $(
          go.Shape,
          'RoundedRectangle',
          {
            strokeWidth: 0,
          },
          new go.Binding('fill', 'color')
        ),
        $(
          go.Panel,
          'Table',
          { defaultAlignment: go.Spot.Left },

          // Main panel for the node text
          $(
            go.TextBlock,
            {
              margin: 8,
              row: 0,
              column: 0,
              columnSpan: 2,
              font: 'bold 14px sans-serif',
              editable: true,
            },
            new go.Binding('text', 'key').makeTwoWay()
          ),

          // Additional fields
          $(
            go.TextBlock,
            {
              row: 1,
              column: 0,
              margin: 4,
            },
            'Param1:'
          ),
          $(
            go.TextBlock,
            {
              row: 1,
              column: 1,
              margin: 4,
              editable: true,
            },
            new go.Binding('text', 'param1').makeTwoWay()
          ),

          $(
            go.TextBlock,
            {
              row: 2,
              column: 0,
              margin: 4,
            },
            'Param2:'
          ),
          $(
            go.TextBlock,
            {
              row: 2,
              column: 1,
              margin: 4,
              editable: true,
            },
            new go.Binding('text', 'param2').makeTwoWay()
          )
        ),

        // Ports for linking
        makePort('T', go.Spot.Top, true, true),
        makePort('L', go.Spot.Left, true, true),
        makePort('R', go.Spot.Right, true, true),
        makePort('B', go.Spot.Bottom, true, true)
      );

      // Define a Link template
      diagram.linkTemplate = $(
        go.Link,
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 5,
          relinkableFrom: true,
          relinkableTo: true,
          reshapable: true,
          resegmentable: true,
        },
        $(
          go.Shape,
          { stroke: 'gray', strokeWidth: 2 }
        ),
        $(
          go.Shape,
          { toArrow: 'Standard', stroke: null, fill: 'gray' }
        )
      );

      // Create the diagram's model data
      diagram.model = new go.GraphLinksModel(
        [
          { key: 'Alpha', color: 'lightblue', param1: 'A1', param2: 'A2' },
          { key: 'Beta', color: 'orange', param1: 'B1', param2: 'B2' },
        ],
        [
          { from: 'Alpha', to: 'Beta', fromPort: 'B', toPort: 'T' }
        ]
      );

      diagramInstance.current = diagram;
    }
  }, []);

  useEffect(() => {
    if (newNodeData && diagramInstance.current) {
      const model = diagramInstance.current.model as go.GraphLinksModel;
      model.addNodeData(newNodeData);
    }
  }, [newNodeData]);

  return <div ref={diagramRef} style={{ width: '600px', height: '400px', border: '1px solid black' }} />;
};

export default Diagram;