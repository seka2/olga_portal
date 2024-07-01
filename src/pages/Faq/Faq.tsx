import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import ChevronDownIcon from "shared/assets/icons/chevron-down.svg?react";

import classes from "./Faq.module.scss";

import "./Faq.scss";
import { useEffect, useState } from "react";
import { getFaq } from "http/siteApi";

export const Faq = () => {
  
  const [faq, setFaq] = useState([]);


  const __load_async = async() => {
    let faqData = await getFaq();
    console.log(faqData);
    setFaq(faqData);
  }

  useEffect(() => {
    __load_async();
  }, []);  

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
                    <div className={classes['item-title']}>{title}</div>
                    <ChevronDownIcon />
                  </>
                }
              >
                <div
                  className={classes.text}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
