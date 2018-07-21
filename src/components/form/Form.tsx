import * as React from 'react'

import SubmitButton from './SubmitButton'

interface IProps {
  children: JSX.Element | JSX.Element[],
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => any, // tslint:disable-line no-any
}

interface IState {
}

export default class Form extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    return <div className="ui_form--container">
      {/* {this.header()} */}
      <form onSubmit={e => this.props.handleSubmit(e)}>
        {this.props.children}
        <SubmitButton handleClick={() => null} />
      </form>
    </div>
  }
}
