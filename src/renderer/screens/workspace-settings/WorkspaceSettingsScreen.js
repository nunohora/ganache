import React, { Component } from "react"
import connect from "../helpers/connect"

import Navbar from "./Navbar"
import Workspace from "./Workspace"

class WorkspaceSettingsScreen extends Component {
  constructor() {
    super()
  }

  render() {
    const settings = this.props.config.settings.workspace
    return (
      <div className="WorkspaceSettingsScreen">
        <Navbar />
        <div className="content">
          <Workspace />
          <h1>Hi there!</h1>
          <pre>{JSON.stringify(settings, null, 4)}</pre>
        </div>
      </div>
    )
  }
}

export default connect(
  WorkspaceSettingsScreen,
  "config"
)
