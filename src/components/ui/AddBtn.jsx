import React from 'react'

export const AddBtn = ( {openModal} ) => {
  return (
    <button className='add-btn' onClick={openModal}><div class="material-symbols-outlined add-btn">
    add
    </div></button>
  )
}
