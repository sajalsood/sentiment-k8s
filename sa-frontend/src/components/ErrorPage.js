import React, { Component } from "react";
import "../App.css";

class ErrorPage extends Component {

    constructor(props) {
        super(props);
        this.state = { status: 'Error Page!', loading: false };
    }

    static renderStatus(status) {
        return (
          <div>{status}</div>
        );
      }
    
    render() {
        let contents = this.state.loading
          ? <p><em>Loading...</em></p>
          : ErrorPage.renderStatus(this.state.status);
    
        return (
          <div>
            {contents}
          </div>
        );
    }    
}

export default ErrorPage;
