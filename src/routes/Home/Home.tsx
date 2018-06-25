import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import './Home.css'

import TicTacToe from '../../components/TicTacToe/'

function HomeEntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Tic-Tac-Toe</title>
      </Helmet>

      <Gx col={12}>
        <TicTacToe />
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
