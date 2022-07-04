import React from 'react'

export default function ArchiveButton({id, onMoveArchive}) {
  return (
    <button type="button" className="note-item__archive-button" onClick={() => onMoveArchive(id)}>Arsipkan</button>
  )
}
