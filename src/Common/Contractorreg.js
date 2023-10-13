import React from "react";
import './contractorreg.css'
const ContractorReg = () => {

    return (
        <div>
          <form action="">
            <div>
                <label htmlFor="username">Fullname</label>
                <input type="text" name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone">phone</label>
                <input type="text" name="phone" id="phone"/>
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="text" name="password" id="password"/>
            </div>
            <button type="submit">Registration</button>

          </form>
        </div>
    )
}
export default ContractorReg