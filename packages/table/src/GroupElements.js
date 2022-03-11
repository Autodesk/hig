import React from 'react';

const GroupElements = ({children, isExpanded}) => <>{children({isExpanded})}</>;

export default GroupElements;
