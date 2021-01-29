import React from 'react'
import classes from './styles.module.scss'
import bgImage from '../../assets/img/bg.svg'
import Slideshow from '../Slideshow/index';
import Content from '../Content/index';

const SignIn: React.FC = () => {
    return (
        <main className={classes.wrapper}>
            <div className={classes.carousel_wrapper} style={{backgroundImage: `url(${bgImage})`}}>
                <Slideshow />
            </div>
            <div className={classes.content_wrapper}>
                <Content />
            </div>
        </main>
    )
}
export default SignIn;
