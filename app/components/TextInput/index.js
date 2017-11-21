/**
*
* TextInput
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

import classNames from 'classnames';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  value() {
    return this.field.value;
  }

  render() {
    const { errorText, placeholder, className } = this.props;

    const fieldError = !errorText ? null :
      (<div
        className={styles.errorMessage}
      >
        {errorText}
      </div>);


    return (
      <div>
        <input
          className={classNames(styles.input, className, { [styles.inputError]: errorText })}
          placeholder={placeholder}
          ref={f => {
            this.field = f;
          }}
          type="text"
        />
        { fieldError }
      </div>
    );
  }
}


TextInput.propTypes = {
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default TextInput;
