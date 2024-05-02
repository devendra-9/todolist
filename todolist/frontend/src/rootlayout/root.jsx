import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import { isloggedin } from '../../../backend/routes/uroutes'

const root = () => {
  console.log("reached root here")
  const isloggedin=false;
  return isloggedin ? <Outlet /> : <Navigate to={"/"} />
}

export default root