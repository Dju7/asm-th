import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function TarifMenu() {
  const tabs = [
    {
      label: "A domicile",
      contain: (
        <div className="h-[90%] w-[90%] mt-10 flex flex-col gap-4 lg:gap-6 items-center text-sky-800">
          <p className=" text-xl lg:text-2xl underline">A domicile - 2H</p>
          <ul className="text-lg   list-disc">
            <li className="lg:mb-2">
              Recevoir un soin énergétique en profondeur
            </li>
            <li className="lg:mb-2">
              Soulager douleurs physiques et psychologiques
            </li>
            <li className="lg:mb-2">Rebooster sa vitalité et son moral</li>
            <li className="lg:mb-2">Entretien et coaching</li>
          </ul>
          <p className="p-2 text-md lg:text-xl bg-amber-200 border border-sky-500">
            80€
          </p>
        </div>
      ),
    },
    {
      label: "A distance",
      contain: (
        <div className="h-[90%] w-[90%] mt-10 flex flex-col gap-6 items-center text-sky-800">
          <p className="text-2xl underline">A distance - 2H</p>
          <ul className="text-lg  list-disc">
            <li className="lg:mb-2">Entretien par téléphone ou Zoom</li>
            <li className="lg:mb-2">Soin énergétique à distance</li>
            <li className="lg:mb-2">Soulager une douleur par magnétisme</li>
            <li className="lg:mb-2">Entretien et coaching</li>
          </ul>
          <p className="p-2 text-md lg:text-xl bg-amber-200 border border-sky-500">
            70€
          </p>
        </div>
      ),
    },
    {
      label: "Tarot",
      contain: (
        <div className="h-[90%] w-[90%] mt-10 flex flex-col gap-6 items-center text-sky-800">
          <p className="text-2xl underline">Tirage Tarot - 1H</p>
          <ul className="text-lg list-disc">
            <li className="lg:mb-2">
              Interroger un champ de votre vie en particulier
            </li>
            <li className="lg:mb-2">Donner des clés pour changer</li>
            <li className="lg:mb-2">Visualiser les directions de vie</li>
            <li className="lg:mb-2">Questions diverses...</li>
          </ul>
          <p className="p-2 text-md lg:text-xl bg-amber-200 border border-sky-500">
            40€
          </p>
        </div>
      ),
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="flex flex-col w-[90%] h-full  bg-white overflow-hidden ">
      <nav className="h-[50px] ">
        <ul className="flex ">
          {tabs.map((item) => (
            <li
              key={item.label}
              onClick={() => setSelectedTab(item)}
              className={`${
                item.label === selectedTab.label ? "bg-sky-200" : "bg-amber-200"
              } relative rounded-tl-lg rounded-tr-lg w-full flex items-center justify-between px-4 py-3 cursor-pointer border border-sky-700`}
            >
              {` ${item.label}`}
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-[410px] 3xl:h-[490px] border border-sky-700">
        <AnimatePresence mode="wait">
          <motion.div
            className="p-4 flex justify-center "
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.contain : "null"}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
