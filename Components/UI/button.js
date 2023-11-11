/** @format */

import Link from "next/link";
import { Fragment } from "react";
import classes from "./button.module.css";
function Button(props) {
    const { link, children, onClick } = props;
    return (
        <Fragment>
            {link ? (
                <Link href={link}>
                    <a className={classes.btn}> {children}</a>
                </Link>
            ) : (
                <button className={classes.btn} onClick={onClick}>
                    {children}
                </button>
            )}
        </Fragment>
    );
}

export default Button;
