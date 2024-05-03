import { Meta, StoryObj } from "@storybook/react";
import { MobileLinks } from "./MobileLinks";

const meta: Meta<typeof MobileLinks> = {
  title: "MobileLinks",
  component: MobileLinks,
  args: {},
};
export default meta;

type Story = StoryObj<typeof MobileLinks>;

export const Default: Story = {};
