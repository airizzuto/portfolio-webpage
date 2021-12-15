import Style from "../styles/ErrorPage.module.scss";

// TODO:
export default function Custom404() {
  return (
    <div className={Style.Container}
      style={{
        backgroundImage:`url(${"static/polygon-scatter-haikei-warn.svg"})`
      }}
    >
      <h1>404 - Page Not Found</h1>
    </div>
  );
}
