import React, { Component } from 'react';

class PhoneForm extends Component {

  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="이름"
        />
        <input
          type="tel"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
          placeholder="전화번호"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;