import { Meta, StoryObj } from "@storybook/react";
import { FlyoutMenu } from "./FlyoutMenu";
import { navigation } from "./FlyoutValues";

const meta: Meta<typeof FlyoutMenu> = {
  title: "FlyoutMenu",
  component: FlyoutMenu,
  args: { categories: navigation.categories, pages: navigation.pages },
};
export default meta;

type Story = StoryObj<typeof FlyoutMenu>;

export const Default: Story = {};
