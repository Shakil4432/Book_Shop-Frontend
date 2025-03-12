import Logo from "../../assets/logo.png";

const WebsiteLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <img src={Logo} alt="Website Logo" className="w-12 h-12" />

      <div className="text-2xl font-bold text-[#e7995e]">Stationary Shop</div>
    </div>
  );
};

export default WebsiteLogo;
