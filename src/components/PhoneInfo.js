import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

  state = {
    editing: false,
    name: '',
    phone: '',
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if(this.state.editing) {
      // true -> false : onUpdate
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone
      })
    } else {
      // false -> true : state에 info 값들 넣어주기
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;

    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px',
    }

    return (
      <div style={style}>
        {
          editing ? (
            <Fragment>
              <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <br />
              <input
                name="phone"
                type="tel"
                onChange={this.handleChange}
                vlaue={this.state.phone}
              />
            </Fragment>
          ) : (
            <Fragment>
              <strong>{name}</strong>
              <div>{phone}</div>
            </Fragment>
          )
        }
        <br />
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>
          { editing ? '적용' : '수정' }
        </button>
      </div>
    );
  }
}

export default PhoneInfo;