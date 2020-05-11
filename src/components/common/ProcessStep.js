import React from 'react';

import { Link } from 'react-router-dom';

const ProcessStep = ({step}) => {

    const getClassName = (myStep) => {
        switch(myStep) {
            case "1":
                if (step === "1") {
                    return "col-4 bs-wizard-step active"
                } else if (step === "2") {
                    return "col-4 bs-wizard-step complete"
                } else {
                    return "col-4 bs-wizard-step complete"
                }
            case "2":
                if (step === "1") {
                    return "col-4 bs-wizard-step disabled"
                } else if (step === "2") {
                    return "col-4 bs-wizard-step active"
                } else {
                    return "col-4 bs-wizard-step complete"
                }
            case "3":
                if (step === "1") {
                    return "col-4 bs-wizard-step disabled"
                } else if (step === "2") {
                    return "col-4 bs-wizard-step disabled"
                } else {
                    return "col-4 bs-wizard-step active"
                }
            default:
                break
        }
    }

    const style_border_bottom = {
        borderBottom:0
    }

    return (
        <div className="row bs-wizard" style={style_border_bottom}>
            <div className={getClassName("1")}>
                <div className="text-center bs-wizard-stepnum">Step 1</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
                <Link to="#" className="bs-wizard-dot"></Link>
                <div className="bs-wizard-info text-center">入力</div>
            </div>
            <div className={getClassName("2")}>
                <div className="text-center bs-wizard-stepnum">Step 2</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
                <Link to="#" className="bs-wizard-dot"></Link>
                <div className="bs-wizard-info text-center">確認</div>
            </div>
            <div className={getClassName("3")}>
                <div className="text-center bs-wizard-stepnum">Step 3</div>
                <div className="progress">
                    <div className="progress-bar"></div>
                </div>
                <Link to="#" className="bs-wizard-dot"></Link>
                <div className="bs-wizard-info text-center">完了</div>
            </div>
        </div>
    );
}

export default ProcessStep
