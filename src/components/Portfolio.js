import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import {filters, projects} from './items'

class Portfolio extends React.Component{
    constructor(props) {
        super(props);
        const {filters, projects} = props;
        this.state = {
            filters: filters,
            selectFilters: filters[0],
            projects: projects
        }
    }

    filterTogo = (filter) => {
        this.state = {
            filters: filters,
            selectFilters: filters[0],
            projects: projects
        }
        let projs = (filter === this.state.selectFilters) ? this.state.projects : this.state.projects.filter(item => item.category === filter)
        this.setState({selectFilters: filter, projects: projs});
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={this.state.filters}
                    selectFilters={this.state.selectFilters}
                    onSelectFilter={(selected) => this.filterTogo(selected)} />
                <ProjectList projects={this.state.projects} />
            </div>
        )
    }
}

Portfolio.propTypes = {
    projects: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired
}

export default Portfolio;