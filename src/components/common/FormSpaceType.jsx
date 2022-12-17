import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsFillQuestionSquareFill } from 'react-icons/bs';

const FormSpaceType = ({ toolTip, title, image, setFun, set }) => {
    return (
        <div className='Space-types-card d-flex align-items-center justify-content-center flex-column'>
            <h3>
                {title}
                <OverlayTrigger
                    overlay={
                        <Tooltip id="tooltip-top">
                            {toolTip}
                        </Tooltip>
                    }
                >
                    <span className='ms-2'><BsFillQuestionSquareFill className='toolTip' /></span>
                </OverlayTrigger>
            </h3>
            <img className='py-4' src={image} alt="photo" />
            <div className='inputGroup d-flex align-items-center justify-content-between'>
                <button
                    disabled={set === 0}
                    onClick={() => setFun(set - 1)}
                    className='plusMinus d-flex align-items-center justify-content-center'><AiOutlineMinus /></button>
                <input className='border-0 text-center form-control h-100  fs-5' type="text" readOnly name='' value={set} />
                <button
                    onClick={() => setFun(set + 1)}
                    className='plusMinus d-flex align-items-center justify-content-center'><AiOutlinePlus /></button>
            </div>
        </div>
    );
};

export default FormSpaceType;