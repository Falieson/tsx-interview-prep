import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

import HelloMaker from '../../components/hello'
// import NetworkStatus from '../../components/network'
import './Home.css'

const Hello = () => HelloMaker('The TSX', 'Interview Prep')

function HomeEntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <Hello />
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
