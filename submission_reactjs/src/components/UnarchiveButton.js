import React from 'react'

export default function UnarchiveButton({id, onMoveArchive}) {
  return (
    <button type="button" className="note-item__unarchive-button" onClick={() => onMoveArchive(id)}>Kembalikan</button>
  )
}
