import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Banner from './components/Banner'
import Chain from './components/Chain'
import Network from './components/Network'
import Chat from './components/Chat'
import Exprience from './components/Exprience'
import Footer from './components/Footer'
import Wallet from './components/Wallet'
import InfoCard from './components/InfoCard'
import Nft from './components/Nft'
import Glass from './components/Glass'
import Refral from './components/Refral'
import Support from './components/Support'



const App = () => {
  return (
    <div>
      <Header />
      <Main/>
      <Banner/>
      <Chain/>
      <Network/>
      <Chat/>
      <Exprience/>
      <InfoCard/>
      <Nft/>
      <Glass/>
      <Refral/>
      <Support/>
      {/* <Wallet/>  */}
      <Footer/>
      
    </div>
  )
}

export default App
