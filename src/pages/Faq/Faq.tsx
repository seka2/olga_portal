import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import ChevronDownIcon from "shared/assets/icons/chevron-down.svg?react";

import classes from "./Faq.module.scss";

import "./Faq.scss";

const faq = [
  {
    title: "Accordion header one",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.",
  },
  {
    title: "Accordion header two",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.",
  },
  {
    title: "Accordion header three",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.",
  },
  {
    title: "Accordion header four",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum placerat faucibus. Nullam quis vulputate purus. Aenean sed purus orci.",
  },
];

export const Faq = () => {
  return (
    <div className={classes.faq}>
      <div className="container">
        <h1 className={classes.title}>FAQ</h1>
        <div className={classes.body}>
          <Accordion
            className={classes.items}
            transition
            transitionTimeout={250}
          >
            {faq.map(({ title, text }) => (
              <AccordionItem
                key={title}
                contentProps={{ className: classes.item }}
                header={
                  <>
                    {title}
                    <ChevronDownIcon />
                  </>
                }
              >
                {text}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
