import type { StoryboardFrame } from "../Storybbtemp";
import { BaseText, lag, rtsc, rtscWithMax } from "../StoryboardHelpers";

export const SubHero = (): StoryboardFrame => {
  return {
    height: "500px",
    items: [
      {
        align: { left: rtsc(1), top: rtsc(1) },
        easingLag: lag("medium"),

        element: (
          <BaseText
            style={{
              textAlign: "left",
              fontSize: rtsc(1),

              maxWidth: rtscWithMax(40, `calc(100vw - ${rtsc(2)})`),
              textShadow: `${rtsc(0)} ${rtsc(0.2)} ${rtsc(
                0.5
              )} rgba(0, 0, 0, 0.1)`,
            }}
          >
            <div style={{ marginBottom: rtsc(1) }}>
              I specialize in architecting scalable systems, engaging digital
              experiences, and intuitive user flows. Currently helping out the
              good folks at <strong>Alphawave Innovations.</strong>
            </div>

            <div>
              Looking to work together?{" "}
              <a href="mailto:johngohrw@gmail.com">Shoot me a mail</a>.
            </div>
          </BaseText>
        ),
      },
    ],
  };
};
