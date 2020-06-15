import React from 'react'

import styles from './mainLayout.module.scss'

const MainLayout = ({children}) => {

    return(
        <div className={styles.mainLayout}>
            <div className={styles.hero} />
            {children}
        </div>
    )
}

export default MainLayout