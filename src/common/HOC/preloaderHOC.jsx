import React from 'react'
import Preloader from '../Preloader/Preloader'

const preloaderHOC = (WrappedComp) => {
    return class extends React.Component {
        render() {
            return (
                <>
                {
                    // this.props.preloaderFlag !== null ?
                    // (this.props.preloaderFlag ? 
                    //     <Preloader /> :
                    // <WrappedComp {...this.props}/>) :
                    // <div>

                    // </div>

                    this.props.preloaderFlag ? 
                        <Preloader /> :
                    <WrappedComp {...this.props}/>
                }
                </>
            )
        }
    }
}

export default preloaderHOC