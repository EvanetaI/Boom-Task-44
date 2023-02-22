export default function Logo({type}) {
    if(!type) type = "default"

    return (
      <div>
        {type === "muted" ? <img src="/images/logo-muted.svg"></img> : <img src="/images/logo.svg"></img>}
      </div>
    );
  }
