import React, { Component } from "react";
import "../App.css";

class TestWebApp extends Component {

    constructor(props) {
        super(props);
        this.state = { status: 'heelo', loading: true };
    }

    componentDidMount() {
        this.getHealthStatus();
    }

    async getHealthStatus() {
        const response = await fetch('http://localhost:8080/testHealth');
        const data = await response.text();
        this.setState({ status: data, loading: false });
    }

    static renderStatus(status) {
        return (
          <div>{status}</div>
        );
      }
    
    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : TestWebApp.renderStatus(this.state.status);
    
        return (
          <div>
            {contents}
          </div>
        );
    }    
}

export default TestWebApp;
