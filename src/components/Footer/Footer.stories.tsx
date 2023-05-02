import Footer from "./Footer";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <>
    <Footer />
  </>
);
