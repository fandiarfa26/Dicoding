import React from 'react'

function getDateString(createdAt) {
  var date = new Date(createdAt);
  return date.toLocaleDateString('id-ID', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
  
}

export default function NoteItemBody({title, body, createdAt}) {
  return (
    <div className='note-item-body'>
        <h2 className="note-item-body__title">{title}</h2>
        <div className="note-item-body__date">{getDateString(createdAt)}</div>
        <p className="note-item-body__body">{body}</p>
      </div>
  )
}
