import React from 'react'

import HeroLink from '../heroLink/heroLink.component'

import {mainSections} from '../../data/menu.data'

import styles from './hero.module.scss'

const Hero = () => {
    return(
        <div className={styles.hero}>
            {mainSections.map( section => (
                <HeroLink key = {section.id} {...section} />
            ))}
        </div>
    )
}

export default Hero