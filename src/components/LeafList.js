import React from 'react';
import { connect } from 'react-redux'
import Leaf from './Leaf';

const LeafList = ({nodes = []}) => (
    <ul style={{listStyle:'none'}}>
    {nodes.map(node =>
         <Leaf key={node.id} node={node}/>)}
    </ul>
)

const mapStateToProps = (state) => ({
  nodes: state.nodes
})

export default connect(
    mapStateToProps
)(LeafList);