import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const authorisation = () => {
    const isauth = false
  return (
    <>
    {

        isauth ?
        (
            <Navigate to = "/" />
        )
        :
        (
            <section>
                <Outlet />
            </section>
        )
    }

    </>
  )
}

export default authorisation