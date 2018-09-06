import React, { Component } from 'react'
import connect from '../helpers/connect'

class WorkspaceSettingsScreen extends Component {
  constructor () {
    super()
  }

  render () {
    console.log(this.props)
    return (
      <div className="WorkspaceSettingsScreen">
        <main>
          <h1>Hi there!</h1>
        </main>
      </div>
    )
  }
}

export default connect(WorkspaceSettingsScreen, "core", "workspaces")