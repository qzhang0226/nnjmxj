import React from 'react';
import { aboutUs } from '../data';

const Business = () => {
    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto text-blue my-5">
                        <h1 className="mb-5 text-center ">经营范围</h1>
                        <h4 className="text-blue">{aboutUs.products}</h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Business;