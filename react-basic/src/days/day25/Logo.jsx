import googleLogo from "./google-logo.png";

function Logo() {
  return (
    <div>
      <a className="flex items-end justify-center mt-24" href="">
        <img className="h-22" src={googleLogo} alt="" />
      </a>
    </div>
  );
}

export default Logo;
