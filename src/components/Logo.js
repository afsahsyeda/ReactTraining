import { LOGO_URL } from "../utils/constants";

const Logo = () => {
  return (
    <div>
      <img className="app-logo" src={LOGO_URL} />
    </div>
  );
};

export default Logo;
