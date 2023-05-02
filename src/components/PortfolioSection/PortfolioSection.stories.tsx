import PortfolioSection from "./PortfolioSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/PortfolioSection",
  component: PortfolioSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <>
    <PortfolioSection />
  </>
);
