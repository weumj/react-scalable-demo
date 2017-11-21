/**
 *
 * LinkForm
 *
 */

import React, { PropTypes } from 'react';

import styles from './styles.css';

import TextInput from '../TextInput';


class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addLink: PropTypes.func.isRequired,
    topicName: PropTypes.string.isRequired,
    addLinkCancel: PropTypes.func.isRequired,
  };
  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();

    const urlError = url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([/[-a-zA-Z0-9@:%_\+.~#?&//=]*)/) ?
      null : 'Please provice a valid URL';
    const descriptionError = description ?
      null : 'Please provice a valid description';

    this.setState(prev => ({
      ...prev,
      urlError,
      descriptionError,
    }));

    if (urlError || descriptionError) {
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  };

  onCancel = () => {

  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Login with your email
          </div>

          <TextInput
            placeholder="URL"
            className={styles.input}
            errorText={this.state.urlError}
            ref={f => (this.url = f)}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={f => (this.description = f)}
          />

          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
              onClick={this.props.addLinkCancel}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
              log in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
