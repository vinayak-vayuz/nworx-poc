import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

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
                title: "Add warehouse costs as semi-variable cost",
              },
              {
                id: "1A1B",
                title: "Add warehouse costs as semi-variable cost",
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

const SubLevelComp = ({ item, depth }) => {
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
      <p
        className={classNames("title", {
          "has-children": hasChildren(item),
          selected,
        })}
        onClick={hasChildren(item) ? toggle : null}
        style={{ cursor: hasChildren(item) ? "pointer" : "" }}
      >
        {item.title} {hasChildren(item) && <span>{selected ? "-" : "+"}</span>}
      </p>
      {selected && (
        <div className="flex flex-wrap gap-4">
          {hasChildren(item) &&
            item.children.map((childItem, index) => (
              <SubLevelComp item={childItem} depth={depth + 1} key={index} />
            ))}
        </div>
      )}
    </motion.div>
  );
};

function Accordion() {
  return (
    <motion.div layout transition={{ duration: 0.5 }} className="mt-10">
      {stepOneQuestions.map((item, index) => (
        <SubLevelComp item={item} depth={1} key={index} />
      ))}
    </motion.div>
  );
}

export default Accordion;
