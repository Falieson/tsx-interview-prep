import * as React from 'react'

import Hello from '../components/hello/'

interface IProps {
  label: string,
}

interface IState {
}

export default class Interview0 extends React.Component<IProps, IState> {
  static defaultProps = {
    label: 'text',
  }

  constructor(props: IProps) {
    super(props)

    this.state = {}
  }

  render() {
    const Hi = () => Hello('Hi', 'World')
    return <div>
       <Hi />
    </div>
  }
}
