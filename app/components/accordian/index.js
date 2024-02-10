import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const CustomContent = () => {
  return (
    <div className="w-full group">
      <div className="flex justify-between items-start gap-2">
        <Image src={"/icons/addtext.svg"} width={13} height={12} alt="icon" />
        <div>
          <p className="font-medium text-[11px] text-black text-opacity-50">
            Add warehouse costs as semi-variable cost
          </p>
          <p className="mt-2 group-hover:font-semibold group-hover:text-[#2E5DB0]">Energy and Utility costs are Lorem ipsum dolor sit amet...</p>
        </div>
        <Image src={"/icons/dropdown.svg"} width={13} height={12} alt="icon" />
      </div>
    </div>
  );
};

const stepOneQuestions = [
  {
    id: 1,
    title:
      "What are the primary components of variable & semi-variable costs impacting gross margins?",
    children: [
      {
        id: "1A",
        title: "Need clarification on the question ?",
        children: [
          {
            id: "1A1",
            title: "How do I connect this to my business context?",
            children: [
              {
                id: "1A1A",
                component: <CustomContent />,
              },
              {
                id: "1A1B",
                component: <CustomContent />,
              },
            ],
          },
          { id: "1A2", title: "Can I skip this?" },
          { id: "1A3", title: "Why is this important?" },
          { id: "1A4", title: "Simplify the question" },
          {
            id: "1A5",
            title: "I do not have enough information to answer this",
          },
        ],
      },
      { id: "1B", title: "Help me get started" },
    ],
  },
  {
    id: 2,
    title:
      "Which are the various fixed costs and to what extent do they impact margin profile of the business?",
  },
  {
    id: 3,
    title: "Are there any hidden or overlooked costs that need consideration?",
  },
];

const SubLevelComp = ({ index, item, depth, isFirstDepth }) => {
  const [selected, setSelected] = useState(false);

  const toggle = () => {
    setSelected(!selected);
  };

  const hasChildren = (item) => {
    return Array.isArray(item.children) && item.children.length > 0;
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.3 }}
      className={`level-${depth}`}
    >
      <div className="flex justify-between items-center gap-2">
        {isFirstDepth && (
          <div className="flex justify-between items-center gap-2">
            <p className="font-semibold text-xs text-black text-opacity-50">
              Question {index + 1} out of {stepOneQuestions.length}
            </p>
          </div>
        )}
        {/* <p
          className={classNames("title", {
            "has-children": hasChildren(item),
            selected,
          })}
          onClick={hasChildren(item) ? toggle : null}
          style={{ cursor: hasChildren(item) ? "pointer" : "" }}
        >
          {hasChildren(item) && <span>{selected ? "-" : "+"}</span>}
        </p> */}
      </div>
      <p
        className={classNames("title", {
          "has-children": hasChildren(item),
          selected,
        })}
        onClick={hasChildren(item) ? toggle : null}
        style={{ cursor: hasChildren(item) ? "pointer" : "" }}
      >
        {item.title}
        {hasChildren(item) && <span>{selected ? "-" : "+"}</span>}
      </p>
      {selected && (
        <div className="flex flex-wrap gap-2">
          {hasChildren(item) &&
            item.children.map((childItem, index) => (
              <SubLevelComp
                index={index}
                item={childItem}
                depth={depth + 1}
                key={index}
                isFirstDepth={false}
              />
            ))}
        </div>
      )}
      {item.component && <div>{item.component}</div>}
    </motion.div>
  );
};

function Accordion() {
  return (
    <motion.div
      layout
      transition={{ duration: 0.5 }}
      className="mt-10 flex flex-col gap-8"
    >
      {stepOneQuestions.map((item, index) => (
        <SubLevelComp
          index={index}
          item={item}
          depth={1}
          key={index}
          isFirstDepth={index === 0 || 1 || 2}
        />
      ))}
    </motion.div>
  );
}

export default Accordion;
