import React from "react";
import Smile from "../../assets/MadSmiley.svg";
import "./menu.css";

const Menu = () => {
  return (
    <div name="menu" className="page-layout bg">
      <div className="content-box">
        <h2 className="page-title">Check Our Menu</h2>
        <div className="menu-grid">
          {/* Smoothies list */}
          <div className="list one">
            <h3 className="list-header">Smoothies</h3>
            <ul className="menu-list">
              <li>
                The Hoops Smoothie <span className="price">€5.00</span>
                <br />
                <span>
                  Strawberry, Banana, Honey, Almovd Milk, Spinach, Peanut Butter
                  and Spirulina
                </span>
              </li>
              <li>
                Kickstart Good Morning <span className="price">€5.00</span>
                <br />
                <span>
                  Peach, Pineapple, Mango, Papaya, Tropical Juice and Natural
                  Yogurt
                </span>
              </li>
              <li>
                Come Around Sundown <span className="price">€5.00</span>
                <br />
                <span>
                  Strawberry, Banana, Blueberries, Orange Juice and Strawberry
                  Yogurt
                </span>
              </li>
              <li className="list-addition">
                (Add Protein or Nut Butter for €1.00)
              </li>
            </ul>
          </div>
          {/* Breakfast list */}
          <div className="list two">
            <h3 className="list-header">Breakfast</h3>
            <ul className="menu-list">
              <li>
                Overnight Oats <span className="price">€4.50</span>
                <br />
                <span>(Add Protein or Nut Butter for €0.50)</span>
              </li>
              <li>
                Hot Porridge Oats <span className="price">€4.00</span>
                <br />
                <span>
                  (Add Nut Butter, Nutella, Protein or Berries for €0.50)
                </span>
              </li>
              <li>
                Breakfast Wrap <span className="price">€7.50</span>
                <br />
                <span>Scrambled Eggs, Bacon, Rocket and Ballymaloe Relish</span>
              </li>
            </ul>
          </div>
          {/* Iced coffee list */}
          <div className="list three">
            <img src={Smile} alt="" className="smile-menu" />
            <h3 className="list-header">Iced Coffees</h3>
            <ul className="menu-list">
              <li>
                Cappuccino <span className="price">€4.00</span>
                <br />
              </li>
              <li>
                Late <span className="price">€4.00</span>
                <br />
              </li>
              <li>
                Americano <span className="price">€4.00</span>
                <br />
              </li>
              <li className="list-addition">
                (Add Syrup or Alternative Milk €4.00)
              </li>
            </ul>
          </div>
           {/*Toasties list */}
          <div className="list four">
            <h3 className="list-header">Toasties</h3>
            <ul className="menu-list">
              <li>
                Chicken and Chorizzo <span className="price">€7.50</span>
                <br />
                <span>
                  Chicken and Chorizo with Mayo, Spinach and Mature Red Cheddar
                </span>
              </li>
              <li>
                Ham and Double Cheese <span className="price">€7.00</span>
                <br />
                <span>
                  Baked Ham with Mature White Cheddar and Grated Cheese
                </span>
              </li>
              <li>
                Cajun Chicken <span className="price">€7.50</span>
                <br />
                <span>
                  Cajun Chicken, Roasted Peppers, 5 Spiced Chesse, Spinach and
                  Taco Sauce
                </span>
              </li>
              <li className="list-addition">
                (All Our Toasties are Served with Dips & Chips)
              </li>
            </ul>
          </div>
           {/*Hot coffees list */}
          <div className="list five">
            <h3 className="list-header">Hot Coffees</h3>
            <ul className="menu-list">
              <li>
                Cappuccino <span className="price">€3.60</span>
              </li>
              <li>
                Latte <span className="price">€3.60</span>
              </li>
              <li>
                Americano <span className="price">€3.20</span>
              </li>
              <li>
                Flat White <span className="price">€3.60</span>
              </li>
              <li>
                Cortado <span className="price">€3.60</span>
              </li>
              <li>
                Double Espresso <span className="price">€3.20</span>
              </li>
              <li>
                Single Espresso <span className="price">€2.70</span>
              </li>
              <li>
                Mocha <span className="price">€4.00</span>
              </li>
              <li>
                Hot Chocolate <span className="price">€4.00</span>
                <br />
                <span>(with marshmallows and cream)</span>
              </li>
              <li>
                Tea <span className="price">€2.00</span>
              </li>
              <li>
                Herbal Tea <span className="price">€3.00</span>
                <br />
                <span>(Green, Mint, Berry and Camomile)</span>
              </li>
            </ul>
          </div>
           {/*Cold drinks list */}
          <div className="list six">
            <h5>
              Alternative Milks <span className="pricefloat">€0.50</span>
            </h5>
            <p>Oat / Soya / Coconut / Almond</p>
            <h5>
              Syrups <span className="pricefloat">€0.50</span>
            </h5>
            <p>Hazelnut, Caramel, Vanilla, Chocolate / Whita Chocolate</p>
            <h3 className="list-header">Cold Drinks</h3>
            <ul className="menu-list">
              <li>
                Water <span className="price">€2.00</span>
              </li>
              <li>
                Sparkling Water <span className="price">€2.00</span>
              </li>
              <li>
                Fanta (Orange/Lemon) <span className="price">€2.00</span>
              </li>
              <li>
                Coke Zero <span className="price">€2.00</span>
              </li>
              <li>
                Vit Hit <span className="price">€2.30</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
