import React, { Component } from "react";
import "../App.css";

class TestLogicApp extends Component {

    constructor(props) {
        super(props);
        this.state = { status: '', loading: true };
    }

    componentDidMount() {
        this.getHealthStatus();
    }

    async getHealthStatus() {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let url = params.get('url');

      if(this.state.url != '') {
        const response = await fetch(`http://${url}/testHealth`);
        const data = await response.text();
        this.setState({ status: data, loading: false });
      }
    }

    static renderStatus(status) {
        return (
          <div>{status}</div>
        );
      }
    
    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : TestLogicApp.renderStatus(this.state.status);
    
        return (
          <div>
            {contents}
          </div>
        );
    }    
}

export default TestLogicApp;
