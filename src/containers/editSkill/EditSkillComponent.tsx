import React, { Component } from 'react'

import IEditSkillComponentProps from './IEditSkillComponentProps'
import IEditSkillComponentState from './IEditSkillComponentState'

export default class EditSkillComponent extends React.Component<IEditSkillComponentProps, IEditSkillComponentState> {
  skillSet = [{}]
  constructor(pros: IEditSkillComponentProps) {
        super(pros)
        this.state = {
            pskill: '',
            sskill: '',
            rating: '',
            listSkill: [{primaryskill: 'Java', subskill: 'Python', rating: '8'}]
        //    skillList: [{primaryskill: 'Java', subskill: 'Python', rating: ''}] 
        }
        this.handlePrimarySkill = this.handlePrimarySkill.bind(this)
        this.handleSecondSkill = this.handleSecondSkill.bind(this)
        this.handleRating = this.handleRating.bind(this)
        
    }
  
    handleSubmit = (e: any) => {
       e.preventDefault()
       const data = {primaryskill: this.state.pskill, sskill: this.state.sskill, rating: this.state.rating}
       console.log(data)
       console.log(this.skillSet)
       this.skillSet = this.state.listSkill
       console.log('............')
       this.skillSet.concat(data)
       console.log('............')
       console.log(this.skillSet)
       this.setState({listSkill: [this.skillSet]})
    }
    handlePrimarySkill(event: any) {
        console.log('iiii')
        console.log(event.target.value)
        this.setState({pskill: event.target.value})
        // console.log(this.props.primaryskill);
        // console.log(this.state.pskill);
    }
    handleSecondSkill(event: any) {
       // this.user.subSkill = event.target.value;
        this.setState({sskill: event.target.value})
    }
    handleRating(event: any) {
        // this.user.rating = event.target.value;
        this.setState({rating: event.target.value})
    }
    // skills = this.skillSet.map(user => user.primarySkill);
    render() {
        var inputStyle = {padding: '12px'}
        return (
          <div className='EditSkillComponent'>
            <header className='EditSkillComponent-header'>
            <div>
            {/* <DisplaySkillComponent primaryskill='' subskill='' rating= '' skillList={this.state.listSkill}/> */}
            <h3>List of Skill'S</h3>
            <table className='table table-striped'>
             <thead><tr><th>Primary_Skill</th><th>Secondary_Skill</th><th>Rating</th><th>Action</th></tr></thead>
            <tr>
              {/* <td>{this.skillSet}</td> */}
              <td>{this.state.pskill}</td>
              <td>{this.state.sskill}</td>
              <td>{this.state.rating}</td>
              <td><input type='button'  className='btn btn-primary' value='Remove'/></td>
            </tr>
            </table>
            </div>
            <h3>Add Your Skill's</h3>
            <form onSubmit={this.handleSubmit}>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text' name='pskill' className='form-control col-md-8' placeholder='Primary Skill' onChange={this.handlePrimarySkill}/>
              </div>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text' name='sskill' className='form-control col-md-8' placeholder='sub-Skill' onChange={this.handleSecondSkill}/>
              </div>
              <div className='input-group input-group-lg' style={inputStyle}>
                <input type='text' name='rating' className='form-control col-md-8' placeholder='Rating' onChange={this.handleRating}/>
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