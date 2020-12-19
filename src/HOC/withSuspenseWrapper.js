import React from 'react'

const WithSuspenseWrapper = (props) => {
    return (
        <React.Suspense>
            {props.children}
        </React.Suspense>
    )
}

export default WithSuspenseWrapper