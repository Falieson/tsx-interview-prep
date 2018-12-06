import Gx from 'gx'
import * as React from 'react'
import Helmet from 'react-helmet'

// import HelloMaker from '../../components/hello'
// import NetworkStatus from '../../components/network'
// const Hello = () => HelloMaker('The TSX', 'Interview Prep')

import ZipCar0 from '../../modules/zip-car-0/'

import './Home.css'

function HomeEntrancePage() {
  return (
    <div className="body--container">
      <Helmet>
        <title>Homepage</title>
      </Helmet>

      <Gx col={12}>
        <ZipCar0 />
      </Gx>
    </div>
  )
}

export default HomeEntrancePage
