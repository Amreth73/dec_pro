import React from 'react'
import "./login.css"
export default function Sign() {


  return (
    <div id="main">
        <div align="center" class="dd">
            <label for="u" class="row">User Name: </label>
            <input id="u"  type="text" placeholder='Enter the first name' required/><br/>
        </div>
        <div align="center" class="dd">
            <label for="e" class="row">Email: </label>
            <input id="e" type="email" placeholder='Enter the email' required/><br />
        </div>
    </div>
  )
}
