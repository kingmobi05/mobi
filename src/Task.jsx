import React from 'react';
import { myData } from './data';
import Item from './components/Item';

const Task = ({ myData, w } ) => {
  return (
    <div>
      {myData.map((x) => (
        <Item x={x}  a={w} />
      ))}
    </div>
  )
}

export default Task