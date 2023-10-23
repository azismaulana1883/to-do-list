
import { Toaster } from 'react-hot-toast'
import '../src/App.css'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'
import PageTitle from './components/PageTitle'

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row border-5">
          <div className="col-lg-12">
            <PageTitle>To Do Lists</PageTitle>
        <div className="row">
          <div className="col">
          <AppHeader/>
          <AppContent/>
          </div>
        </div>
      </div>
      <Toaster toastOptions={{ 
        style: {
          fontSize: '1.4rem'
        }
       }} />
          </div>
        </div> 
    </>
  )
}

export default App
