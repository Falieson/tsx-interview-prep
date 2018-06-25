import { shallow } from 'enzyme'
import * as React from 'react'

import TicTacToe from '../TicTacToe'

describe('<TicTacToe />', () => {
  describe('Helpers', () => {
    describe('until there is a winner', () => {
      it('across', () => {
        const positions = [
          [1, 1, 1],
          [2, 2, 0],
          [0, 0, 0],
        ]
        const TTT = new TicTacToe({positions})

        const result = TTT.checkAcross()
        expect(result.winner).toEqual(1)
      })
      // it('down', () => false)
      // it('diagonally', () => false)
    })
  })
  describe('Plays', () => {
  //   it('with alternating players', () => false)
  //   it('with two players', () => false)
  //   it('until there is a tie', () => false)
    describe('until there is a winner', () => {
    //     it('diagonally', () => false)
    //     it('across', () => false)
    //     it('down', () => false)
    })
  })
  describe('Renders', () => {
    it('Succesfully', () => {
      const wrapper = shallow(<TicTacToe />)
      expect(wrapper).toMatchSnapshot()
    })
    describe('<Board />', () => {
      // it('9 positions', () => false)
      // it('highlight of winning 3 positions in a row', () => false)
      // it('highlight of winning 3 positions in a col', () => false)
      // it('highlight of winning 3 positions in a diag', () => false)
    })
    describe('<Header />', () => {
      // it('displays current player', () => false)
      // it('displays new game button when game is over', () => false)
      // it('score of player1 vs player2', () => false)
    })
    describe('<Overlay />', () => {
      // it('overlay with winning player announce', () => false)
      // it('overlay with no-winner announce', () => false)
    })
  })
})
