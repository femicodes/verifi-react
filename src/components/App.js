import React from 'react';

import Navbar from './Navbar';
import '../styles/Navbar.scss';
import Content from './Content';

const App = () => {
    return (
        <div className="baba">
            <Navbar />
            <Content />
        </div>
    );
};

export default App;