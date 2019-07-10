import React from 'react';
import { aboutUs } from '../data';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                        <h1 className="text-title font-weight-bold">{aboutUs.manager}</h1><strong>经理</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-auto col-md-7 my-3">
                        <h4 className="text-blue">
                            地址 : {aboutUs.address}
                        </h4>
                        <h4 className="text-blue">
                            电话 : {aboutUs.workPhone}
                        </h4>
                        <h4 className="text-blue">
                            传真 : {aboutUs.fax}
                        </h4>
                        <h4 className="text-blue">
                            手机 : {aboutUs.mobilePhone}
                        </h4>
                        <h4 className="text-blue">
                            E-mail : {aboutUs.email}
                        </h4>
                        <h4 className="text-blue">
                            税号 : {aboutUs.taxNumber}
                        </h4>
                        <h4 className="text-blue">
                            开户 : {aboutUs.bank}
                        </h4>
                        <h4 className="text-blue">
                            账号 : {aboutUs.account}
                        </h4>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;