import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = React.Children.map(this.props.children, (child, index)=> {
            return React.cloneElement(child, {
                key: index,
                globalInverse: this.props.inverse,
                vertical: this.props.vertical
            })
        })

        let menuClassname = classNames({
            '_namespace': true,
            'inverse': this.props.inverse,
            'vertical': this.props.vertical
        })

        let mergeStyle = this.props.style
        if (!this.props.style.height) {
            mergeStyle.height = 45
        }

        if (this.props.vertical) {
            mergeStyle.height = null
        }

        return (
            <div style={mergeStyle}
                 className={menuClassname}>
                {childs}
            </div>
        )
    }
}

Menu.defaultProps = {
    style: {}
}