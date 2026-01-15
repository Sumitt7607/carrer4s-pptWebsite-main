import { Link } from "react-router-dom";

const Career4SLogo = () => {
  return (
    <Link
      to="/"
      className="flex flex-col leading-tight select-none"
    >
      {/* BRAND NAME */}
      <span className="text-2xl font-extrabold tracking-wide text-orange-600">
        Career<span className="text-gray-100">4S</span>
      </span>

      {/* TAGLINE */}
      <span className="text-sm font-medium text-orange-500 flex items-center gap-2">
        <span className="w-6 h-[2px] bg-orange-500" />
        India & Abroad
        <span className="w-6 h-[2px] bg-orange-500" />
      </span>
    </Link>
  );
};

export default Career4SLogo;
