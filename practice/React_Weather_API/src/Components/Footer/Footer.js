import React from 'react'
import classes from './Footer.module.css'

export default function Footer() {
    return (
        <div className={classes.wrapper}>
            <div>Copyright &copy; {new Date().getFullYear()}</div>
        </div>
    )
}
