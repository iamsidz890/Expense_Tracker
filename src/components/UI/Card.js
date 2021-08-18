// for wrapping 
import './Card.css'

function Card (props) {
    // this prop every component receieves by default --------- children [keyword]
    // for setting both classes i.e on this div and the custom html component .
    const classes = 'card' + props.className ;
    return <div className={classes}>{props.children}</div>
}

export default Card ;