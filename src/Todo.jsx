import AppHeader from './components/AppHeader'
import PageTitle from './components/PageTitle'
import styles from './styles/modules/app.module.scss'

function Todo() {

  return (
    <>
      <div className="app">
        <PageTitle>TODO Lists</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader/>
          
        </div>
      </div>
    </>
  )
}

export default Todo
