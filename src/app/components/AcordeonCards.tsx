import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AcordeonItems = ({
  title,
  className,
  subtitle,
}: {
  title: string;
  className: string;
  subtitle?: string;
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-2" className={className}>
        <AccordionTrigger className="font-semibold text-[20px] px-5 aria-expanded:bg-white  cursor-pointer">
          <span className="flex flex-col  justify-center text-center items-center self-center w-full">
            <span className="text-center w-full text-[20px]">{title}</span>
            <span className="text-[12px] ">{subtitle}</span>
          </span>
        </AccordionTrigger>
      </AccordionItem>
    </Accordion>
  );
};

export const AcordeonCards = () => {
  return (
    <div className="w-full -mt-6 mb-2">
      <AcordeonItems title="DESTACADOS" className="bg-amber-200" />
      <AcordeonItems
        title="HAMBURGUESAS"
        subtitle="TODAS INCLUYEN PAPAS"
        className="bg-gray-200 "
      />
      <AcordeonItems
        title="PIZZAS"
        subtitle="ESTILO NAPOLITANO"
        className="bg-gray-200 "
      />
      <AcordeonItems title="COPETIN" className="bg-gray-200 " />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-5" className="bg-gray-200 ">
          <AccordionTrigger className="font-semibold text-[20px] px-5 aria-expanded:bg-white">
            <span className="text-center w-full">PICADAS</span>
          </AccordionTrigger>
          <AccordionContent className="text-center">
            <div className="text-start px-4 mt-2">
              <div className="font-bold text-[18px]">Picada Clasica</div>
              <p className="text-gray-500 flex flex-row justify-between">
                <span>
                  <span className="font-semibold text-black"> Para 2 </span>$
                  12500 /{" "}
                  <span className="font-semibold text-black"> Para 3</span>
                  <span> $ 15000</span>
                </span>
                <img
                  src="/picada1.jpeg"
                  alt="."
                  className="w-20 h-20 -mt-5 rounded-sm"
                />
              </p>
              <p className="bg-amber-500 w-[64px] text-center -mt-8 mb-2 h-[22px] rounded-full ">
                Pedir +
              </p>
            </div>
            <div className="text-start px-4 mt-8">
              <div className="font-bold text-[18px]">Hop Supply Full</div>
              <p className="text-gray-500 flex flex-col justify-between">
                <span className="font-thin text-black w-[60%]">
                  Jamon cocido, queso, jamon crudo, aceitunas, albondigas
                  fritas, salamin, matambre. croquetas de acelga y empanadas
                  copetin
                </span>
                <span>
                  <span className="font-semibold text-black"> Para 2 </span>$
                  12500 /{" "}
                  <span className="font-semibold text-black"> Para 3</span>
                  <span> $ 15000</span>
                </span>
              </p>
              <p className="bg-amber-500 w-[64px] text-center mt-3  h-[22px] rounded-full ">
                Pedir +
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <AcordeonItems title="MILAS Y LOMOS" className="bg-gray-200 " />
    </div>
  );
};
