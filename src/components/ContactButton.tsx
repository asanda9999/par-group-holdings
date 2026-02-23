import styled from "styled-components";

interface ContactButtonProps {
  href?: string;
}

const ContactButton = ({ href = "mailto:info@parring.co.za" }: ContactButtonProps) => {
  const handleClick = () => {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
    }
  };

  return (
    <StyledWrapper>
      <button className="cta" onClick={handleClick} type="button">
        <span>Contact Us&nbsp;</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px" aria-hidden="true" focusable="false">
          <path d="M1,5 L11,5" />
          <polyline points="8 1 12 5 8 9" />
        </svg>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 22px;
    transition: all 0.2s ease;
    border: 2px solid #0f172a;
    border-radius: 4px;
    background: #0f172a;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    border-radius: 0;
    background: white;
    width: 44px;
    height: 100%;
    transition: all 0.8s ease;
  }

  .cta span {
    position: relative;
    font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      sans-serif;
    font-size: 16px;
    color: white;
    font-weight: 400;
    letter-spacing: 0.05em;
    z-index: 1;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.5s ease;
    z-index: 1;
  }

  .cta:hover:before {
    width: 100%;
    background: #1c1c1c;
  }

  .cta:hover svg {
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  .cta:active {
    transform: scale(0.95);
    transition: all 0.15s ease;
  }
`;

export default ContactButton;

