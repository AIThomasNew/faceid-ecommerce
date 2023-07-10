import React from "react";
import { useSeeMode } from "./module";
import cl from "./ui.module.css";
import btn from "./checkbox.module.css";
export const SeeMode = () => {
  const store = useSeeMode();
  const turn = useSeeMode((state) => state.turn);
  const styles = {
    color: store.color,
    fontSize: store.size,
    fontFamily: store.font,
    fontStyle: store.style,
    fontWeight: store.style,
    textDecoration: store.style,
  };
  return (
    <div className={cl.wrapper}>
      {/* <h2> */}
      <h2 className={cl.h2}>
        Настройте как вам удобно видеть:
        {/* checkbox */}
        <div className={btn.button} id={btn.button}>
          <input
            type="checkbox"
            className={btn.checkbox}
            onChange={store.setTurn}
            checked={store.turn}
          />
          <div className={btn.knobs}></div>
          <div className={btn.layer}></div>
        </div>
      </h2>
      {/* </h2> */}
      {/* wrappSettings */}
      <div className={cl.wrappSettings}>
        {/* text */}
        <div className={cl.settText}>
          <h3>Шрифт:</h3>
          <div
            className={cl.item}
            onClick={() => store.setStyle("bold")}
            id={cl.bold}
            style={turn ? styles : {}}
          >
            A
          </div>
          <div
            className={cl.item}
            onClick={() => store.setStyle("underline")}
            id={cl.underline}
            style={turn ? styles : {}}
          >
            A
          </div>
          <div
            className={cl.item}
            onClick={() => store.setStyle("italic")}
            id={cl.cursive}
            style={turn ? styles : {}}
          >
            A
          </div>
        </div>
        {/* color */}
        <div className={cl.settColor}>
          <h3>Цвет текста:</h3>
          <input
            type="color"
            className={cl.inputColor}
            onChange={(e) => store.setColor(e.target.value)}
            value={store.color}
          />
        </div>
      </div>
      {/* wrappSettings2 */}
      <div className={cl.wrappSettings2}>
        {/* size */}
        <div className={cl.settSize}>
          <h3>Размер текста:</h3>
          <div
            className={cl.item}
            onClick={() => store.setSize("16px")}
            style={turn ? styles : {}}
          >
            Маленький
          </div>
          <div
            className={cl.item}
            onClick={() => store.setSize("18px")}
            style={turn ? styles : {}}
          >
            Средний
          </div>
          <div
            className={cl.item}
            onClick={() => store.setSize("24px")}
            style={turn ? styles : {}}
          >
            Большой
          </div>
        </div>
        {/* font */}
        <div className={cl.settFont}>
          <h3>Стиль текста:</h3>
          <div
            className={cl.item}
            onClick={() => store.setFont("calibri")}
            style={turn ? styles : {}}
          >
            Calibri
          </div>
          <div
            className={cl.item}
            onClick={() => store.setFont("monospace")}
            style={turn ? styles : {}}
          >
            Monospace
          </div>
          <div
            className={cl.item}
            onClick={() => store.setFont("Roboto")}
            style={turn ? styles : {}}
          >
            Roboto
          </div>
          <div
            className={cl.item}
            onClick={() => store.setFont("Montserrat")}
            style={turn ? styles : {}}
          >
            Montserrat
          </div>
        </div>

        <div
          className={cl.settFont}
          style={{ cursor: "pointer", color: "red" }}
        >
          <h3 onClick={store.clear}>Отменить изменения</h3>
        </div>
      </div>
    </div>
  );
};
