import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const navigate = useNavigate();
let isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  useEffect(() => {
 if(!isLoggedIn){
      navigate('/login');
    }else{
      navigate('/properties')
    }
  }, [])

  return (
    <div>
      <h1>Properties</h1>
    </div>
  )
}

export default Properties
