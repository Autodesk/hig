import React from 'react';

import PaginationInput from './PaginationInput';
import PaginationDynamic from './PaginationDynamic';

const PaginationComponent = (pageDetails, paginateDynamic) => {
    if (paginateDynamic) {
        return <PaginationDynamic pageDetails={pageDetails} />
    } else {
        return <PaginationInput pageDetails={pageDetails} />
    }
}

export default PaginationComponent;
