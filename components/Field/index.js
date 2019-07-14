import React, { Component, Fragment } from 'react';
import { 
  TextField,
  ContainerArea,
  Error,
  ContainerError
} from './styled';

class Field extends Component {

  state = {
    remaining: this.props.max
  }

  handlerRemaining = (event) => {
    this.setState({remaining: parseInt( this.props.max - event.currentTarget.value.length)})
  }

  render () {
    const {
      type,
      name,
      max,
      cols,
      rows,
      error,
      value,
      defaultValue,
      defaultChecked,
      size,
      margin
    } = this.props;

    return (
      type === 'textArea' ?
        <ContainerArea>
          <ContainerError>
            <textarea
              name={name}
              maxLength={max}
              cols={cols}
              rows={rows}
              onChange={ event => this.handlerRemaining(event)}
              error={error}
              defaultValue={defaultValue}
            ></textarea>
            {error && <Error margin={margin}>{error.errorType}</Error>}
          </ContainerError>
          <p>restan {this.state.remaining} caracteres</p>
          
        </ContainerArea>
      :
        <ContainerError>
          <TextField 
            type={type} 
            name={name}
            maxLength={max}
            error={error}
            defaultValue={defaultValue}
            defaultChecked={defaultChecked}
            size={size}
            />
            {error && <Error margin={margin}>{error.errorType}</Error>}
          </ContainerError>
    );
  }
}

export default Field;