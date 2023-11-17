import { BagdgeInterface} from "../types";
import React from 'react';
import styles from './Badge.module.css';
const Badge = ({text,filled}: BagdgeInterface) => {
    const filledClass = filled ? styles.filled : "";
    return (

        <small className={`${styles.badge} ${filledClass}`}>{text}</small>
    )
}

export default Badge;