import Slider from "./Slider";
import Image from "next/image";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <>
    <Slider>
      {Array(8)
        .fill("")
        .map((_, index) => (
          <Image
            src="https://source.unsplash.com/featured/300x200"
            key={index}
            alt=""
            width={300}
            height={200}
            style={{ pointerEvents: "none" }}
          />
        ))}
    </Slider>
  </>
);
