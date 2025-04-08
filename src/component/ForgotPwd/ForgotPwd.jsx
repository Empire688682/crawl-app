"use client";
import React, {useState} from 'react';
import ForgotPwdMpdalsOne from './ForgotPwdMpdals/ForgotPwdMpdalsOne';
import ForgotPwdMpdalsTwo from './ForgotPwdMpdals/ForgotPwdMpdalsTwo';
import ForgotPwdMpdalsThree from './ForgotPwdMpdals/ForgotPwdMpdalsThree';

const ForgotPwd = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [modal, setModal] = useState("StageOne");
  return (
    <div>
      {
        modal === "StageOne" && <ForgotPwdMpdalsOne setModal={setModal} />
      }
      {
        modal === "StageTwo" && <ForgotPwdMpdalsTwo setModal={setModal} />
      }
      {
        modal === "StageThree" && <ForgotPwdMpdalsThree setModal={setModal} />
      }
    </div>
  )
}

export default ForgotPwd
