import React from "react";
import styled from "styled-components";

export type HeroImageProps = {
  src: string;
  alt: string;
  height?: string;
  overlayText?: string;
};

// Container for the hero section
const HeroContainer = styled.div<{ $height?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.$height || "300px"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

// Background image
const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const OverlayText = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  height,
  overlayText,
}) => {
  return (
    <HeroContainer $height={height} role="img" aria-label={alt}>
      <StyledImage src={src} alt={alt} />
      {overlayText && <OverlayText>{overlayText}</OverlayText>}
    </HeroContainer>
  );
};

export default HeroImage;
