import React, { Component } from 'react'

export default class EditProfileComponents extends Component {
    render() {
        var inputStyle = {padding: '12px'}
        return (
          
          <div className='EditProfileComponents'>
            <header className='ditProfileComponents-header'>
            <h3>Add Your Skill's</h3>
            <form >
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text'  className='form-control col-md-8'  placeholder='Primary Skill'/>
              </div>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text'  className='form-control col-md-8' placeholder='Sub-Skill' />
              </div>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text'  className='form-control col-md-8' placeholder='Rating' />
              </div>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='submit' value='Add'/>
              </div>
            </form>
            </header>
          </div>
        )
      }
}