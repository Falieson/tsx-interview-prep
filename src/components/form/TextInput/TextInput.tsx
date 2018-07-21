import * as React from 'react'

interface IProps {
  handleChange: (e: React.FormEvent<HTMLInputElement>) => any // tslint:disable-line no-any
  handleKey: (e: React.FormEvent<HTMLInputElement>) => any // tslint:disable-line no-any
  name?: string,
  placeholder?: string,
}

interface IState {
  value: string,
}

export default class TextInput extends React.Component<IProps, IState> {
  static defaultProps = {
    name: 'text',
    placeholder: 'put some text in here....',
  }

  constructor(props: IProps) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    // TODO: support classNames in props
    // TODO: add debounce to onChange
    return <div className="ui_input--container">
      <input
        type="text"
        className="ui_input--text"
        value={this.state.value}
        onChange={this.props.handleChange}
        onKeyPress={this.props.handleKey}
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    </div>
  }
}
