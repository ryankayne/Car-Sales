import React from 'react';
// import { statement } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/babel__template';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
