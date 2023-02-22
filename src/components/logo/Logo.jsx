function Logo(props) {
    if(!props.type) props.type = "default"

    return (
      <div>
        {props.type === "default" ? <img src="/images/logo.svg"></img> : <img src="/images/logo-muted.svg"></img>}
      </div>
    );
  }
  export default Logo;
