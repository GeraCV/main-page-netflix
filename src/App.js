import './root.css'
import Header from './components/header'
import Banner from './components/banner'
import FirstSection from './components/firstSection'
import SecondSection from './components/secondSection'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="principal">
        <Header />
        <Banner />
      </div>
      <FirstSection />
      <SecondSection />
      <Footer />
    </>
  )
}

export default App;
