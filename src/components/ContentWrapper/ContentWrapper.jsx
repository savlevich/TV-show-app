import React from 'react';
import './styles.scss';

const ContentWrapper = props => {
  return (
    <div className="content-wrapper">
      {props.children}
    </div>
  )
};

export default ContentWrapper;