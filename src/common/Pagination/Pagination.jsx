import React from 'react'
import styles from './Pagination.module.css'

const Pagination = (props) => {

    const [pages, setPagesCount] = React.useState([])

    React.useEffect(() => {
        let temp = []
        // for(let i=1; i<=props.pagesCount; i++) {
        for(let i=1; i<=30; i++) {
            temp.push(
                <span className={props.currentPage === i ? styles.selectedPage : styles.page}
                        onClick={() => {props.setCurrentPage(i)}}
                > {i} </span>
            )
        }
        setPagesCount(temp)
    }, [props.pagesCount,props.currentPage])

    return (
        <div className={styles.pagination}>{pages}</div>
    )
}

export default Pagination