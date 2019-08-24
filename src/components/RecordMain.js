import React from 'react';
import RecordHeader from './RecordHeader';
import RecordBody from './RecordBody';
import '../styles/RecordMain.scss';

const RecordMain = () => {
    return (
        <div className="all">
            <RecordHeader />
            <RecordBody />
        </div>
    );
};

export default RecordMain;