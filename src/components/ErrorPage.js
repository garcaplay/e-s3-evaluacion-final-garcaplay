import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ErrorPage extends Component {
  render() {
    return (
      <div className="errorpage">
        <p>No hay datos</p>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
              <div className="hp-detail-link">Go back</div>
              </Link>
      </div>  
    );
  }
}

export default ErrorPage;