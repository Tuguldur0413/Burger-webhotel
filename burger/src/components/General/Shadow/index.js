import React from "react";
import css from "./style.module.css";

const Shadow = (props) =>{
    return props.show ? <div onClick={props.darahad} className={css.shadow}></div> : null
}

export default Shadow;