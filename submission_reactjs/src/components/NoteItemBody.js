import React from 'react'
import { showFormattedDate } from '../utils'

export default function NoteItemBody({title, body, createdAt}) {
  return (
    <div className='note-item-body'>
        <h2 className="note-item-body__title">{title}</h2>
        <div className="note-item-body__date">{showFormattedDate(createdAt)}</div>
        <p className="note-item-body__body">{body}</p>
      </div>
  )
}
