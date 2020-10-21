import React from "react";
import Button from "../General/Button"

const OrderSummary = (props) => {
    return (
      <div>
        <h3>Таны Захиалга</h3>
        <p>Таны сонголтууд</p>
        <ul>
          {Object.keys(props.ingredients).map(el=>(
            <li key={el}>

                {props.ingredientsNames[el]} : {props.ingredients[el]}

            </li>
          ))}
        </ul>
          <p><strong>Захиалгын дүнг:{props.price}</strong></p>
        <p>Цааш Үрэглжлүүлэхүү?</p>
        <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ"/>
        <Button daragdsan={props.onContinue} btnType="Succeess" text="ҮРЭГЛЖЛҮҮЛЭХ"/>
      </div>
    );
};

export default OrderSummary;