import React from 'react'

import styles from './header.module.scss'

const Header = () => {
    

    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                Logo
            </div>
            <div className={styles.nav}>
                <ul>
                    <li>test</li>
                    <li>test2</li>
                </ul>
            </div>
        </div>
    )
}

export default Header