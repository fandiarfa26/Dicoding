import React, { Component } from 'react'
import {getInitialData} from '../utils'
import Header from './Header';
import NoteAddForm from './NoteAddForm';
import NoteList from './NoteList';
import SwitchButton from './SwitchButton';

export default class NoteApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      isSearching: false,
      searchedNotes: [],
      isArchivePage: false,
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveArchiveHandler = this.onMoveArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onSwitchPageHandler = this.onSwitchPageHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          },
        ]
      }
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState((prevState) => { 
      return {
        ...prevState,
        notes 
      }
    });
  }

  onMoveArchiveHandler(id) {
    
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.map(note => note.id === id ? {...note, archived: !note.archived} : note),
        searchedNotes: prevState.searchedNotes.map(note => note.id === id ? {...note, archived: !note.archived} : note)
      }
    });
  }

  onSearchHandler(keyword) {
    const isSearching = keyword !== "";
    const searchedNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(keyword));
    this.setState((prevState) => {
      return {
        ...prevState,
        isSearching,
        searchedNotes
      }
    });
  }

  onSwitchPageHandler(value) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isArchivePage: value === 'archive'
      }
    })
  }

  render() {
    let data = this.state.isSearching ? this.state.searchedNotes : this.state.notes;
    
    return (
      <div>
        <Header searchNotes={this.onSearchHandler}/>
        <main>
          <SwitchButton switchPage={this.onSwitchPageHandler}/>
          {
            this.state.isArchivePage
              ? (
                <div className="main__wrapper">
                  <NoteList 
                      isArchived={true}
                      notes={data}
                      onDelete={this.onDeleteHandler}
                      onMoveArchive={this.onMoveArchiveHandler}/>
                </div>
              )
              : (
                <div className="main__wrapper">
                  <NoteAddForm addNote={this.onAddNoteHandler} />
                  <NoteList 
                    isArchived={false}
                    notes={data}
                    onDelete={this.onDeleteHandler}
                    onMoveArchive={this.onMoveArchiveHandler}/>
                </div>
              )
          }
          
          
          
        </main>
      </div>
    )
  }
}
