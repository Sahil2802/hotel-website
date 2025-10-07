import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  const navRef = useRef(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useGSAP(() => {
    // ---------------------------------------------
    // Scroll handler with RAF-throttling and GSAP
    // ---------------------------------------------
    // We use a small 'ticking' lock and requestAnimationFrame to
    // throttle scroll events (they fire very frequently). This keeps
    // the animation smooth and avoids performance issues.
    const handleScroll = () => {
      // If an RAF frame is already scheduled, skip (prevents stacking)
      if (!ticking.current) {
        // Schedule work to run just before the next repaint
        // IMPORTANT: We set `ticking.current = true` immediately AFTER scheduling
        // requestAnimationFrame. This is because requestAnimationFrame only
        // *schedules* the callback for the next repaint — it does NOT run it
        // synchronously inside this scroll handler. Setting `ticking` to true
        // prevents multiple scroll events from scheduling multiple RAFs
        // before the first scheduled frame runs. The RAF callback below will
        // run on the next animation frame, perform the work, and then set
        // `ticking.current = false` to allow scheduling the next frame.
        window.requestAnimationFrame(() => {
          // Read the current vertical scroll position
          const currentScrollY = window.scrollY;

          // Threshold: only start hiding when the user has scrolled
          // a bit (prevents the navbar from twitching on tiny scrolls)
          if (currentScrollY > 20) {
            if (currentScrollY > lastScrollY.current) {
              // User is scrolling DOWN -> hide navbar by moving it up
              // We use GSAP's `to` method to animate the `y` property
              // (translateY). This produces a smooth, GPU-friendly animation.
              gsap.to(navRef.current, {
                y: -100, // move navbar up by 100px (off-screen)
                duration: 0.5,
                ease: "power2.out",
              });
            } else {
              // User is scrolling UP -> show navbar by bringing it back
              gsap.to(navRef.current, {
                y: 0, // reset to original position
                duration: 0.5,
                ease: "power2.out",
              });
            }
          } else {
            // Near the top of the page - always show the navbar
            gsap.to(navRef.current, {
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }

          // update last scroll position and release the ticking lock
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });

        // Lock until the scheduled RAF callback runs
        ticking.current = true;
      }
    };

    // Make sure the navbar is visible on initial load/refresh even if the
    // page is already scrolled. Set lastScrollY to the current scroll pos
    // so the first comparison won't incorrectly treat the initial position
    // as a "scroll down" action. Also force y:0 so the navbar is shown.
    lastScrollY.current = window.scrollY;
    gsap.set(navRef.current, { y: 0 });

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup: remove listener when component unmounts. This prevents
    // memory leaks and avoids duplicate listeners if the component
    // is mounted/unmounted multiple times.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav ref={navRef} className="fixed w-full nav-gradient text-white p-4 z-40">
      <ul className="top-0 left-0 flex justify-around items-center uppercase text-sm w-full">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="text-center playfair-display-bold font-bold text-3xl normal-case cursor-pointer">
          Haven
          <p className="font-normal font-sans text-xs  uppercase tracking-[0.3em]">
            Hotel & Resort
          </p>
        </li>
        <li className="cursor-pointer">Services</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
