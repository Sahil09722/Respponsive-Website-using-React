import "./plans.css";
import Card from "../../UI/Card";
import Secondheader from "../../component/Secondheader";
import header from "../../images/header_bg_4.jpg";
import { plans } from "../../data";

const Plans = () => {
  return (
    <>
      <Secondheader title="Membership plans" image={header}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        dignissimos.
      </Secondheader>
      <section className="plans">
        <div className=" container plans-container">
       
            {plans.map(({ id, name, desc, price, features }) => {
              return (
                <Card key={id}>
                  <h1>{name}</h1>
                  <p>{desc}</p>
                  <h1>{`$${price}`}</h1>
                  <h2>/mo</h2>
                  <h4>Features</h4>
                  {features.map(({ feature, available }, index) => {
                    return (
                      <p
                        key={index}
                        className={!available ? "isAvailable" : ""}
                      >
                        {feature}
                      </p>
                    );
                  })}
                  <button className="btn lg">Choose plan</button>
                </Card>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Plans;
