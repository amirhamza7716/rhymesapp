"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function StarIcon() {
  return (
    <div className="flex justify-center">
        <FontAwesomeIcon icon={faStar} className="str" /><FontAwesomeIcon icon={faStar} className="str" /><FontAwesomeIcon icon={faStar} className="str" /><FontAwesomeIcon icon={faStar} className="str" /><FontAwesomeIcon icon={faStar} className="str" />
    </div>
  )
}

export default StarIcon