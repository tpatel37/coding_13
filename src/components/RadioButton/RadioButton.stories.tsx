import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";


type RadioButtonProps = React.ComponentProps<typeof RadioButton>;

const meta: Meta<typeof RadioButton> = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;


const DefaultComponent: React.FC<RadioButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <>
      <RadioButton
        {...args}
        value="option1"
        checked={selectedValue === "option1"}
        onChange={() => setSelectedValue("option1")}
      />
      <RadioButton
        {...args}
        value="option2"
        checked={selectedValue === "option2"}
        onChange={() => setSelectedValue("option2")}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <DefaultComponent {...args} />,
  args: {
    label: "Option 1",
    name: "radio-group",
    disabled: false,
  },
};


export const Disabled: Story = {
  render: (args) => <RadioButton {...args} />,
  args: {
    label: "Disabled Option",
    value: "disabled",
    name: "radio-group",
    disabled: true,
  },
};
