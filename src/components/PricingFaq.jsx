import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
export default function PricingFaq() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);
 
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
 
  return (
    <>
      <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1}>Quetion 1?</AccordionHeader>
        <AccordionBody>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe, nisi reiciendis dolor cum facilis vero et repudiandae corporis, temporibus recusandae distinctio veritatis provident eligendi soluta atque architecto, dolores deserunt.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc2}>
        <AccordionHeader onClick={handleOpenAcc2}>Question 2 ?</AccordionHeader>
        <AccordionBody>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim mollitia laborum est, sapiente totam incidunt. Recusandae, temporibus. Maiores impedit quam quibusdam blanditiis, aperiam, debitis eum dolorum quisquam tempore hic incidunt.
        </AccordionBody>
      </Accordion>
      <Accordion open={openAcc3}>
        <AccordionHeader onClick={handleOpenAcc3}>
          Question 3
        </AccordionHeader>
        <AccordionBody>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet saepe cupiditate, totam illo at cumque ut asperiores iste sequi animi vel, quia esse voluptatibus qui perferendis a, dignissimos quis sed!
        </AccordionBody>
      </Accordion>
    </>
  );
}