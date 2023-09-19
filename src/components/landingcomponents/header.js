import { useState, useCallback } from "react";
import TournamentDropdown from "./tournament-dropdown";
import PortalPopup from "./portal-popup";
import MarketplaceDropdown from "./marketplace-dropdown";
import StreamingDropdown from "./streaming-dropdown";
import NewsDropdown from "./news-dropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isTournamentDropdownOpen, setTournamentDropdownOpen] = useState(false);
  const [isMarketplaceDropdownOpen, setMarketplaceDropdownOpen] = useState(false);
  const [isStreamingDropdownOpen, setStreamingDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setNewsDropdownOpen] = useState(false);

  const openTournamentDropdown = useCallback(() => {
    setTournamentDropdownOpen(true);
  }, []);

  const closeTournamentDropdown = useCallback(() => {
    setTournamentDropdownOpen(false);
  }, []);

  const openMarketplaceDropdown = useCallback(() => {
    setMarketplaceDropdownOpen(true);
  }, []);

  const closeMarketplaceDropdown = useCallback(() => {
    setMarketplaceDropdownOpen(false);
  }, []);

  const openStreamingDropdown = useCallback(() => {
    setStreamingDropdownOpen(true);
  }, []);

  const closeStreamingDropdown = useCallback(() => {
    setStreamingDropdownOpen(false);
  }, []);

  const openNewsDropdown = useCallback(() => {
    setNewsDropdownOpen(true);
  }, []);

  const closeNewsDropdown = useCallback(() => {
    setNewsDropdownOpen(false);
  }, []);

  return (
    <div className="bg-gray-900 p-4 flex items-center lg:justify-between justify-center text-white flex-wrap font-inter">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover"
          alt=""
          src="/logoimage@2x.png"
        />
        <NavLink to="/" className="text-2xl text-springgreen-100">
          Esportree
        </NavLink>
      </div>

      <div className="flex flex-wrap lg:space-x-4 gap-3 items-center justify-center mb-3">
        <NavLink to="/" className="text-xl text-white">
          Home
        </NavLink>
        <NavLink to="/about" className="text-xl text-white">
          About Us
        </NavLink>
        <div className="relative flex flex-row items-center justify-center gap-1 cursor-pointer">
          <span className="text-xl text-white" onClick={openTournamentDropdown}>
            Tournament
          </span>
          <img
            className="w-4 h-2 object-cover"
            alt=""
            src="/down-arrow.svg"
          />
          {isTournamentDropdownOpen && (
            <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeTournamentDropdown}
            >
              <TournamentDropdown onClose={closeTournamentDropdown} />
            </PortalPopup>
          )}
        </div>
        <div className="relative flex flex-row items-center justify-center gap-1 cursor-pointer">
          <span className="text-xl text-white" onClick={openMarketplaceDropdown}>
            Marketplace
          </span>
          <img
            className="w-4 h-2 object-cover"
            alt=""
            src="/down-arrow.svg"
          />
          {isMarketplaceDropdownOpen && (
            <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeMarketplaceDropdown}
            >
              <MarketplaceDropdown onClose={closeMarketplaceDropdown} />
            </PortalPopup>
          )}
        </div>
        <div className="relative flex flex-row items-center justify-center gap-1 cursor-pointer">
          <span className="text-xl text-white" onClick={openStreamingDropdown}>
            Streaming
          </span>
          <img
            className="w-4 h-2 object-cover"
            alt=""
            src="/down-arrow.svg"
          />
          {isStreamingDropdownOpen && (
            <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeStreamingDropdown}
            >
              <StreamingDropdown onClose={closeStreamingDropdown} />
            </PortalPopup>
          )}
        </div>
        <div className="relative flex flex-row items-center justify-center gap-1 cursor-pointer">
          <span className="text-xl text-white" onClick={openNewsDropdown}>
            News
          </span>
          <img
            className="w-4 h-2 object-cover"
            alt=""
            src="/down-arrow.svg"
          />
          {isNewsDropdownOpen && (
            <PortalPopup
              overlayColor="rgba(113, 113, 113, 0.3)"
              placement="Centered"
              onOutsideClick={closeNewsDropdown}
            >
              <NewsDropdown onClose={closeNewsDropdown} />
            </PortalPopup>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-xl text-white cursor-pointer">Login</span>
        <span className="text-xl text-springgreen-100 cursor-pointer">Signup</span>
      </div>
    </div>
  );
};

export default Header;
