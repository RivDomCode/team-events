import React from 'react'

export const AddBtn = ( {openModal} ) => {
  return (
    <button className='add-btn' onClick={openModal}><span class="material-symbols-outlined">
    add
    </span></button>
  )
}
