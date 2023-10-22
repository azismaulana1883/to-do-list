
import { Toaster } from 'react-hot-toast'
import '../src/App.css'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'
import PageTitle from './components/PageTitle'

function App() {

  return (
    <>
      <div className="container-fluid">
        <PageTitle>TODO Lists</PageTitle>
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
    </>
  )
}

export default App
