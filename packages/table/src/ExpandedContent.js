import React from 'react';

const ExpandedContent = ({children, expandedContentStyles}) =>
    <div css={expandedContentStyles.higTableCustomExpander}>{children()}</div>;

export default ExpandedContent;
