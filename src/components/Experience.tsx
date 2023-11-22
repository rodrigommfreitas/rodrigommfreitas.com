"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "~/hooks/useSectionInView";
import SectionHeading from "./SectionHeading";
import { experiences } from "~/data/experiences";

export const Experience = () => {
  const { ref } = useSectionInView("Experience");

  return (
    <div ref={ref} className="max-w-[80rem]">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.250)">
        {experiences.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "0.5rem 1rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="!text-white"
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 1)",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              <h3 className="font-semibold capitalize text-white">
                {item.title}
              </h3>
              <p className="!mt-0 font-normal text-white/90">{item.location}</p>
              <p className="!mt-1 text-sm !font-normal text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};
