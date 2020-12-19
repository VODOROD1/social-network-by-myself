import React from 'react'
import Preloader from '../common/Preloader/Preloader'

const withSuspenseHOC = (Comp) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Comp />
            </React.Suspense>
        )
    }
}

export default withSuspenseHOC