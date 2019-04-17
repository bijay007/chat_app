import React from 'react';
import getObjectDepth from '../../utils/getObjectDepth';
const NestedListItems = props => {
  let dataNestedLevels = getObjectDepth(props, 'data');
  return (
    <div>
      This has {dataNestedLevels} levels of nesting.
    </div>
  )
}

export default NestedListItems;
