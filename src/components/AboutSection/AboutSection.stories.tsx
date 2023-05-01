import AboutSection from "./AboutSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/AboutSection",
  component: AboutSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <>
    <AboutSection />
  </>
);
