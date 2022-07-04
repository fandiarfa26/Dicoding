import React, { Component } from 'react'

export default class NoteAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      isActive: false,
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.changeActiveHandler = this.changeActiveHandler.bind(this);
  }

  onTitleChangeHandler(e) {
    if (e.target.value.length <= 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          title: e.target.value,
        }
      })
    }
  }

  onBodyChangeHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: e.target.value,
      }
    })
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({
        title: '',
        body: '',
        isActive: false,
    })
  }

  changeActiveHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        isActive: true,
      }
    })
  }
  
  render() {
    return (
      <form className="note-add-form" onSubmit={this.onSubmitHandler}>
        {
          this.state.isActive ? (
            <div className="note-add-form__title-wrapper" >
              <textarea rows="2" className="note-add-form__title-input" placeholder='Judul' value={this.state.title} onChange={this.onTitleChangeHandler} required></textarea>
              <div className='note-add-form__title-limit'>{this.state.title.length}/50</div>
            </div>
          ) : null
        }
        <textarea rows="5"  className="note-add-form__body-input" placeholder='Buat catatan...' value={this.state.body} onChange={this.onBodyChangeHandler} onClick={this.changeActiveHandler} required></textarea>
        {
          this.state.isActive ? (
            <button type="submit" className="note-add-form__submit-button">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Simpan Baru</span>
            </button>
          ) : null
        }
      </form>
    )
  }
}
