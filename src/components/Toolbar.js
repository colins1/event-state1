import React from 'react';
import PropTypes from 'prop-types';

function Toolbar (props) {
    const {filters, selectFilters, onSelectFilter } = props;
    return(
        <div>
        <div>{filters.map((filter,i) => <button onClick={() => onSelectFilter(filter)} key={i}>{filter}</button>)}</div>
        </div>
    )
}


export default Toolbar;

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    onSelectFilter: PropTypes.func.isRequired,
    selectFilters: PropTypes.string
}