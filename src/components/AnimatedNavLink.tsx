import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface AnimatedNavLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  lineColor?: string;
  activeColor?: string;
  isActive?: boolean;
}

const StyledWrapper = styled.div<{ lineColor?: string; activeColor?: string; isActive?: boolean }>`
  .nav-link {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    border: none;
    background: none;
    font-weight: inherit;
    font-family: inherit;
    cursor: pointer;
    position: relative;
    padding: 0;
    margin: 0;
  }

  .nav-link::before {
    margin-left: auto;
  }

  .nav-link::after, .nav-link::before {
    content: '';
    width: ${props => props.isActive ? '100%' : '0%'};
    height: 2px;
    background: ${props => props.isActive ? (props.activeColor || props.lineColor || '#f44336') : (props.lineColor || '#f44336')};
    display: block;
    transition: 0.5s;
    position: absolute;
    bottom: -4px;
  }

  .nav-link::before {
    left: 0;
  }

  .nav-link::after {
    right: 0;
  }

  .nav-link:hover::after, .nav-link:hover::before {
    width: 100%;
  }
`;

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({ 
  children, 
  onClick, 
  to, 
  className,
  lineColor,
  activeColor,
  isActive
}) => {
  if (to) {
    return (
      <StyledWrapper 
        className={className} 
        lineColor={lineColor}
        activeColor={activeColor}
        isActive={isActive}
      >
        <Link to={to} className="nav-link">
          {children}
        </Link>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper 
      className={className} 
      lineColor={lineColor}
      activeColor={activeColor}
      isActive={isActive}
    >
      <button onClick={onClick} className="nav-link">
        {children}
      </button>
    </StyledWrapper>
  );
};

export default AnimatedNavLink;
