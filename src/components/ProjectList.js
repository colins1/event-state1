import React from 'react';
import PropTypes from 'prop-types'

function ProjectList(props) {
    const {projects} = props
    return (
      <div>{projects.map((poroj, i) => <div key={i}><img src={poroj.img}/></div>)}</div>
    )
  }

  export default ProjectList

  ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
  }