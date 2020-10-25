/* eslint-disable max-len */
import React, { Component } from 'react';
import HistoryList from '../History/HistoryList';
import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import { apiFetch } from '../../services/apiFetch';
import styles from './RESTman.css';
import headStyle from './Header.css';

export default class RESTman extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    histories: [],
    display: { 'Welcome to RESTman': 'I am open to requests' }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await this.handleFetch();

    return this.setState({
      histories: [...this.state.histories, {
        url: this.state.url,
        method: this.state.method,
        body: this.state.body,
        key: `${this.state.url}+${this.state.method}`
      }]
    }
    );
  }

  handleFetch = () => {
    const { url, method, body } = this.state;
    return apiFetch(url, method, body)
      .then(res => this.setState({ display: res }));
  }

  render() {
    const { url, method, body, display, histories } = this.state;

    return (
      <>
        <section className={styles.RESTman}>
          <div>
            <header className={headStyle.Header}>RESTman</header>
            <HistoryList histories={histories} />
          </div>

          <div>
            <Controls
              url={url}
              method={method}
              body={body}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange} />
            <Display display={display} />
          </div>
        </section>
      </>
    );
  }
}
