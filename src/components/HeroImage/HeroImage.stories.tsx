import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import HeroImage from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  render: (args) => <HeroImage {...args} />,
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjWHPooxPd14Nbjep15al9HKdprC6IUSSig&s",
    alt: "Hero Image",
    height: "400px",
    overlayText: "Welcome to Our Website",
  },
};

export const NoText: Story = {
  render: (args) => <HeroImage {...args} />,
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjWHPooxPd14Nbjep15al9HKdprC6IUSSig&s",
    alt: "Hero Image Without Text",
    height: "400px",
    overlayText: "",
  },
};
