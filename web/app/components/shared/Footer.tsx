const YEAR = new Date().getFullYear();

const Footer = () => (
  <>
    <p className="mx-4 mb-8 max-w-screen-2xl sm:mx-auto">
      I have a few leads on the Barnwell/Herbert line going back to 3rd/4th
      grandparents, but nothing substantial. I know that Maria Law's family is
      from England and came to the Philadelphia, PA in the mid 18th century,
      just before the signing of the Declaration of Independence. As for the
      Barnwells, I have nothing passed (Old) Richard Barnwell. Margaret
      Wilkson's parents were named Patrick Wilkinson & Margaret Geharty, both
      were from County Meath Ireland.
    </p>
    <footer className="border-t-2 border-gray-300 py-4 text-center">
      Made with love ❤️ <span className="mx-2">{YEAR}</span>
    </footer>
  </>
);

export default Footer;
