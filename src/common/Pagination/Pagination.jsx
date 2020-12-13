import React from 'react'
import classnames from 'classnames'
import styles from './Pagination.module.css'

const Pagination = (props) => {
  const [pages, setPages] = React.useState(0)
  const [amountOfPortions, setPortions] = React.useState(0)
  const [currentPortion, setCurrentPortion] = React.useState(20)

  const prevHandler = () => {
    setCurrentPortion(currentPortion - 1)
  }

  const nextHandler = () => {
    console.log(amountOfPortions)
    setCurrentPortion(currentPortion + 1)
  }

  React.useEffect(() => { // Высчитываем количество порций
    let amountOfPortions = props.pagesCount/20 - props.pagesCount%20/20 + 1
    setPortions(amountOfPortions)
  },[props.pagesCount])

  React.useEffect(() => {       // Создаем массив для пагинации
    let arr = []
    for(let i=1+(20*(currentPortion-1)); i<=currentPortion*20; i++) {
      arr.push(<span className={classnames({[styles.selectedPage] : i === props.currentPage},styles.pageNumber)}
          onClick={() => props.selectPage(i)}>{i} </span>)
    }
    setPages(arr)
  },[props.currentPage,currentPortion])

  return (
    <p className={styles.pagination}>
      <div className={styles.buttonWrapper1}>
        <button className={classnames({[styles.unvisible] : currentPortion === 1},styles.prevButton)} onClick={prevHandler}>PREV</button>
      </div>
      <div className={styles.buttonWrapper2}><button className={styles.backButton}>{'<'}</button></div>
      <div className={styles.pages}>
        {pages.length !== 0 ? pages : 'Pagination are counted!'}
      </div>
      <div className={styles.buttonWrapper2}><button className={styles.forwardButton}>{'>'}</button></div>
      <div className={styles.buttonWrapper1}>
        <button className={classnames({[styles.unvisible] : currentPortion === amountOfPortions},styles.nextButton)} onClick={nextHandler}>NEXT</button>
      </div>
    </p>
  )
}

export default Pagination
