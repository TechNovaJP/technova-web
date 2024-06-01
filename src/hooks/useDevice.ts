import { useState, useEffect } from "react";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isDesktopLarge, setIsDesktopLarge] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("only screen and (max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "only screen and (min-width: 768px) and (max-width: 1024px)",
    );
    const desktopQuery = window.matchMedia(
      "only screen and (min-width: 1025px) and (max-width: 2379px)",
    );
    const desktopLargeQuery = window.matchMedia(
      "only screen and (min-width: 2380px)",
    );

    const handleMobileChange = (e: MediaQueryListEvent) =>
      setIsMobile(e.matches);
    const handleTabletChange = (e: MediaQueryListEvent) =>
      setIsTablet(e.matches);
    const handleDesktopChange = (e: MediaQueryListEvent) =>
      setIsDesktop(e.matches);
    const handleDesktopLargeChange = (e: MediaQueryListEvent) =>
      setIsDesktopLarge(e.matches);

    // Add event listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);
    desktopQuery.addEventListener("change", handleDesktopChange);
    desktopLargeQuery.addEventListener("change", handleDesktopLargeChange);

    // 初期状態の設定
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);
    setIsDesktop(desktopQuery.matches);
    setIsDesktopLarge(desktopLargeQuery.matches);

    return () => {
      // Remove event listeners
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
      desktopQuery.removeEventListener("change", handleDesktopChange);
      desktopLargeQuery.removeEventListener("change", handleDesktopLargeChange);
    };
  }, []);

  return { isMobile, isTablet, isDesktop, isDesktopLarge };
};

export default useDevice;
