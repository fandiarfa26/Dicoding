import React from 'react'
import NoteEmpty from './NoteEmpty';
import NoteItem from './NoteItem'

export default function NoteList({ isArchived, notes, onDelete, onMoveArchive }) {
  let header;
  let data;
  if (isArchived) {
    header = "Arsip Catatan";
    data = notes.filter(note => note.archived)
    
  } else {
    header = "Koleksi Catatan";
    data = notes.filter(note => !note.archived)
  }

  return (
    <div className="note-list">
      <h1 className="note-list__header">{header}</h1>
      <div className="note-list__items">
        {
          data.length > 0
          ? data.map(note => (
              <NoteItem key={note.id} {...note} onDelete={onDelete} onMoveArchive={onMoveArchive} />
            )) 
          : <NoteEmpty/>
        }
      </div>
    </div>
  )
}