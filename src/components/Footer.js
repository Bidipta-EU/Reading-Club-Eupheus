const Footer = () => {
  return (
    <footer className="self-stretch bg-gray-100 flex flex-row flex-wrap items-end justify-between py-3 pr-[66.4px] pl-[103px] box-border relative min-h-[135px] max-w-full gap-[20px] text-left text-base text-darkslateblue font-mulish mq450:pl-5 mq450:box-border mq725:pl-[51px] mq725:pr-[33px] mq725:box-border mq975:justify-center">
      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[13.4px]">
          <div className="relative leading-[24px] inline-block min-w-[78.6px]">
            Language:
          </div>
          <b className="relative leading-[24px] inline-block min-w-[55.5px]">
            English
          </b>
        </div>
      </div>
      <div className="w-[420.6px] relative leading-[24px] flex items-center shrink-0 max-w-full">
        <span className="w-full">
          <span>{`© 2024 Eupheus. `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Terms
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Privacy Policy
          </span>
          <span>{` | `}</span>
          <span className="[text-decoration:underline] text-slategray">
            Accessibility
          </span>
        </span>
      </div>
      <img
        className="h-2 w-2 absolute !m-[0] bottom-[-150px] left-[242.3px] overflow-hidden shrink-0"
        alt=""
        src="/languagepopup--svg.svg"
      />
    </footer>
  );
};

export default Footer;
