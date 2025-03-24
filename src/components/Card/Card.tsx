import React from "react";
import styled from "styled-components";

export type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  width?: string;
  height?: string;
  onClick?: () => void;
};

// Ensure unnecessary props are not passed to StyledCard
const StyledCard = styled.div<
  Omit<CardProps, "title" | "description" | "imageSrc">
>`
  width: ${(props) => props.width || "300px"};
  height: ${(props) => props.height || "auto"};
  min-height: 150px; // Prevent collapse if no image
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  text-align: center;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px; // Set a default height
  object-fit: cover; // Maintain aspect ratio
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  width,
  height,
  onClick,
}) => {
  return (
    <StyledCard width={width} height={height} onClick={onClick}>
      {imageSrc && <CardImage src={imageSrc} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
