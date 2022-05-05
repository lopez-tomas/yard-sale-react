import React from 'react'
import { Link } from 'react-router-dom';
import '@styles/NotFound.sass';
import Button from '@components/Button';

const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error">
        <div className="bouncing">
          <div className='a'>4</div>
          <div className='b'>0</div>
          <div className='c'>4</div>
          <div className="shadow"></div>
          <div className="shadow-two"></div>
        </div>
        <p>Page not found 😢</p>
      </div>
      <Link to="/">
        <Button variant="primary">Go back to Home</Button>
      </Link>
    </div>
  )
}

export default NotFound