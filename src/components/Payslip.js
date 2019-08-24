import React from 'react';
import '../styles/Payslip.scss';

const Payslip = () => {
    return (
        <div className="mainOne">
            <p>Payslip Records</p>
            <div className="right">
                <div className="date">27, May 2019  10:54 AM</div>
                <div className="card">
                    <div className="total-paid">Total paid</div>
                    <div className="amount">₦920,800</div>
                </div>
            </div>
        </div>

    );
};

export default Payslip;