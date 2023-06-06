import React from 'react'
// @ts-ignore
import Graph from 'react-graph-vis'

export interface Node {
  id: number
  label: string
  group: string
}

export interface Edge {
  from: number
  to: number
  label: string
}

export interface IGraph {
  nodes: Node[]
  edges: Edge[]
}

interface Props {
  graph: Graph
}

export const MyGraph = ({ graph }: Props) => {
  const options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    layout: {
      hierarchical: false,
    },
    groups: {
      rap: { color: { background: 'red' }, borderWidth: 3 },
      trap: { color: { background: 'blue' }, borderWidth: 3 },
      pop: { color: { background: 'green' }, borderWidth: 3 },
      rock: { color: { background: 'black' }, borderWidth: 3 },
    },
    nodes: {
      font: {
        color: '#FFFFFF',
      },
      shape: 'box',
      color: {
        border: '#09090B',
        background: '#18181B',
        highlight: {
          border: '#09090B',
          background: '#18181B',
        },
        hover: {
          border: '#09090B',
          background: '#18181B',
        },
      },
    },
    edges: {
      arrows: {
        to: {
          enabled: false,
        },
      },
      color: '#FFFFFF',
      font: {
        color: '#FFFFF',
        size: 14,
      },
    },
    physics: {
      stabilization: true,
      barnesHut: {
        springLength: 150,
        gravitationalConstant: -3000,
      },
    },
  }

  return <Graph graph={graph} options={options} />
}
