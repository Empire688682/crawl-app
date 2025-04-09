"use client";
import React, {useState} from 'react';
import ForgotPwdModalsOne from './ForgotPwdModals/ForgotPwdModalsOne';
import ForgotPwdModalsTwo from './ForgotPwdModals/ForgotPwdModalsTwo';
import ForgotPwdModalsThree from './ForgotPwdModals/ForgotPwdModalsThree';

const ForgotPwd = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [modal, setModal] = useState("StageOne");
  return (
    <div>
      {
        modal === "StageOne" && <ForgotPwdModalsOne setModal={setModal} />
      }
      {
        modal === "StageTwo" && <ForgotPwdModalsTwo setModal={setModal} />
      }
      {
        modal === "StageThree" && <ForgotPwdModalsThree setModal={setModal} />
      }
    </div>
  )
}

export default ForgotPwd
