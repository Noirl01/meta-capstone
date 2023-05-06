import React from "react";
import OrderMenuItem from "./OrderMenuItem";

function OrderSection() {
  return (
    <section className="order-section">
      <div className="order-section--title">
        <h3>Specials</h3>
        <button>Online Menu</button>
      </div>
      <div class="order-section--menu">
        <OrderMenuItem numOfCards={3} />
      </div>
    </section>
  );
}

export default OrderSection;
