import Style from "../styles/ErrorPage.module.scss";

// TODO:
export default function Custom500() {
  return (
    <div className={Style.Container}
      style={{
        backgroundImage:`url(${"static/polygon-scatter-haikei-warn.svg"})`
      }}
    >
      <h1>500 - Server Error</h1>
    </div>
  );
}
