import React from 'react'
import DeleteButton from './DeleteButton'
import NoteItemBody from './NoteItemBody'
import UnarchiveButton from './UnarchiveButton'
import ArchiveButton from './ArchiveButton'

export default function NoteItem({ id, title, body, archived, createdAt, onDelete, onMoveArchive}) {
  return (
    <article className={`note-item ${archived? 'note-item__archived' : 'note-item__unarchived'}`}>
      <NoteItemBody title={title} body={body} createdAt={createdAt}/>
      <div className="note-item__buttons">
        <DeleteButton id={id} onDelete={onDelete}/>
        {
          archived 
            ? <UnarchiveButton id={id} onMoveArchive={onMoveArchive}/>
            : <ArchiveButton id={id} onMoveArchive={onMoveArchive}/>
        }
      </div>
    </article>
  )
}
