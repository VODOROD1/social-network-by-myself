import React from 'react'
import Preloader from '../Preloader/Preloader'

const suspenseHOC = (Comp) => {
    return (props) => {
        return (
            <React.Suspense fallback={<div>PRELOADER...</div>}>
                <Comp {...props}/>
            </React.Suspense>
        )
    }
}

export default suspenseHOC