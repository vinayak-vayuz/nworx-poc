"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Sidebar from "./components/sidebar";
import MobileHeader from "./components/header";
import { useRouter } from "next/navigation";
import Accordion from "./components/accordian";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function Home() {
  const [getstarted, setGetstarted] = useState(true);
  const [question, setQuestion] = useState(false);
  const [questionexp, setQuestionExp] = useState();
  const [moreclarificationonsection, setMoreClarificationSection] =
    useState(false);
  const [moreclarificationonquestion, setMoreClarificationQuestion] =
    useState(false);

  // Router
  const router = useRouter();

  function handleGetStarted() {
    setGetstarted(!getstarted);
  }
  function handleMoreClarificationSection() {
    setMoreClarificationSection(!moreclarificationonsection);
  }
  function handleMoreClarificationQuestion() {
    setMoreClarificationQuestion(!moreclarificationonquestion);
  }
  function handleQuestions() {
    setQuestion(!question);
  }

  const moreClarificationQuestions = [
    { question: "How does this apply in my business context ?" },
    { question: "Help me learn more" },
    { question: "I dont find this relevant to me" },
  ];

  const stepOneQuestions = [
    {
      id: 1,
      question:
        "What are the primary components of variable & semi-variable costs impacting gross margins?",
      answer: [
        {
          Q: "Need clarification on the question ?",
          answers: [
            {
              Q: "How do I connect this to my business context?",
              answers: [
                {
                  title: "Add warehouse costs as semi-variable cost",
                  detail:
                    "Personnel, real estate & utilities cost associated with central storage",
                },
                {
                  title: "Add warehouse costs as semi-variable cost",
                  detail:
                    "Personnel, real estate & utilities cost associated with central storage",
                },
              ],
            },
            { Q: "Can I skip this?" },
            { Q: "Why is this importatnt? " },
            { Q: "Simplify the question " },
            { Q: "I do not have enough information to answer this" },
          ],
        },
        { Q: "Help me get started" },
      ],
    },
    {
      id: 2,
      question:
        "Which are the various fixed costs and to what extent do they impact margin profile of the business?",
    },
    {
      id: 3,
      question:
        "Are there any hidden or overlooked costs that need consideration?",
    },
  ];

  const handleStepOneQuestions = (id) => {
    setQuestion(!question);
    const stepOneExpanded = stepOneQuestions.filter((questions) => {
      return questions.id === id;
    });
    console.log(stepOneExpanded);
    setQuestionExp(id);
    return stepOneExpanded;
  };
  // const handleMoreQualificationByID = (id) => {
  //   const moreQualificationExpanded = stepOneQuestions.filter((answers) => {
  //     return answers.id === id;
  //   });
  //   const 
  //   console.log(moreQualificationExpanded);
  //   setQuestionExp(id);
  //   return moreQualificationExpanded;
  // };
  return (
    <main
      className={`${inter.className} flex flex-col md:flex-row min-h-screen`}
    >
      {/* Mobile Header */}
      <MobileHeader />
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full md:w-[85%] pl-4 md:pl-10 pr-6 md:pr-20 pb-4 bg-[#F8F8F8]">
        {/* Section Heading */}
        <div className="pt-6 pb-4 flex flex-col md:flex-row justify-between gap-2">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-4"
          >
            <Image
              className=""
              src={"/icons/left_arrow.svg"}
              width={14}
              height={14}
              alt="icons"
            />
            <span className="font-medium text-[#2D3648]">Back</span>
          </button>
          {!getstarted ? (
            <>
              <h1 className="font-bold transition-all duration-300 ease-out">
                Review the variable, semi-variable & fixed cost elements of the
                P&L.
              </h1>
              <div className="flex flex-col lg:flex-row items-center gap-2">
                <p className="text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">15 mins</span>
                  <span className="text-[#000000] opacity-50">remaining</span>
                </p>
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/progress_bar.svg"}
                  width={112}
                  height={8}
                  alt="progress_bar"
                />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        {/* Heading Section */}
        {getstarted ? (
          <>
            {" "}
            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="pb-1 text-xs font-semibold">19 Nov • Monday</p>
                <h1 className="text-2xl font-semibold">
                  Review the variable, semi-variable & fixed cost elements of
                  the P&L.
                </h1>
                <p>
                  Specifically evaluate opportunity areas where there is
                  headroom vs historical benchmarks, and/or external industry
                  benchmarks.
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/arrows.svg"}
                  width={16}
                  height={16}
                  alt="arrow"
                />
                <Image
                  className="hover:text-[#F58A43] group-hover:stroke-[#F58A43]"
                  src={"/icons/progress_bar.svg"}
                  width={112}
                  height={8}
                  alt="progress_bar"
                />

                <p className="text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">15 mins</span>
                  <span className="text-[#000000] opacity-50">remaining</span>
                </p>
                <p className="-mt-1 text-xs whitespace-nowrap">
                  <span className="pr-1 font-bold text-black">5 mins</span>
                  <span className="pr-1 text-[#000000] opacity-50">to</span>
                  <span className="font-bold text-[#2E5DB0]">break</span>
                </p>
              </div>
            </div>{" "}
          </>
        ) : (
          <></>
        )}
        {/* Step Section */}
        <motion.div
          layout
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`pt-4 flex justify-center gap-6`}
        >
          <div className="w-full md:w-[70%] flex flex-col gap-4">
            {/* Step 1 */}
            <div className="p-3 w-full min-h-20 bg-white rounded-xl flex flex-col gap-2">
              <div className="flex justify-between">
                {getstarted ? (
                  <p className="font-semibold text-[13px]">{"STEP 1/3"}</p>
                ) : (
                  <p className="font-semibold text-base text-[#000000] opacity-50">
                    {"STEP 1"}
                  </p>
                )}

                {getstarted ? (
                  <p className="font-semibold text-[15px]">
                    4 Prompts | 5 mins
                  </p>
                ) : (
                  <button
                    className="px-2.5 py-3 rounded-full bg-[#000000] bg-opacity-5"
                    onClick={() => {
                      handleGetStarted();
                      handleQuestions();
                    }}
                  >
                    <Image
                      src={"/icons/arrow_up.svg"}
                      width={14}
                      height={9}
                      alt="icon"
                    />
                  </button>
                )}
              </div>
              <div className="flex justify-between">
                <div>
                  <h1 className="font-bold text-xl">Cost Identification</h1>
                  {question ? (
                    <p className="text-sm text-opacity-50">
                      Identify and categorize the various costs influencing
                      margins....{" "}
                      <button className="font-bold text-sm text-[#2E5DB0]">
                        view more 🔽
                      </button>
                    </p>
                  ) : (
                    <></>
                  )}
                  {getstarted ? (
                    <p className="text-sm">
                      Identify and categorize the various costs influencing
                      margins.
                    </p>
                  ) : (
                    <>
                      {!question ? (
                        <div>
                          <p className="text-sm transition-all duration-300">
                            Identify and categorize the various costs
                            influencing margins. Costs are usually categorized
                            as variable costs (which increase directly with an
                            increase in sales or revenue – for example raw
                            material costs for production), semi-variable costs
                            (which increase with sales too, but not as linearly.
                            For example – manpower costs for some services heavy
                            business) and fixed costs (which are not linked to
                            the volume of products/sales/revenue directly. For
                            example – headquarter administration costs).
                          </p>
                          <button>
                            <Image
                              src={"/icons/from_HBR.svg"}
                              width={65}
                              height={9}
                              alt="icon"
                            />
                          </button>
                          {/* More clarification on section */}
                          <motion.div
                            layout
                            transition={{ duration: 0.5 }}
                            className={`${
                              !moreclarificationonsection ? "w-fit" : "w-full"
                            } mt-2 bg-[#DFEBF680] bg-opacity-50 rounded p-2`}
                          >
                            <button
                              onClick={handleMoreClarificationSection}
                              className="w-full flex justify-between items-center gap-2"
                            >
                              <p className="font-semibold text-[11px] text-[#2E5DB0]">
                                ✨ Need more clarification on the section?
                              </p>
                              <Image
                                src={
                                  !moreclarificationonsection
                                    ? "/icons/addincircle.svg"
                                    : "/icons/addincircle_blue.svg"
                                }
                                width={13}
                                height={12}
                                alt="icon"
                              />
                            </button>
                            {moreclarificationonsection ? (
                              <>
                                <div className="mt-2 flex flex-wrap gap-4">
                                  {moreClarificationQuestions.map(
                                    (data, index) => (
                                      <button
                                        key={index}
                                        className="p-2.5 bg-white rounded-3xl flex items-center gap-2"
                                      >
                                        <div
                                          className={`${
                                            index === 1
                                              ? "bg-[#FFDEDF]"
                                              : "bg-[#DDE3EE80] bg-opacity-50"
                                          } p-1  rounded-full flex justify-center items-center`}
                                        >
                                          <Image
                                            src={"/icons/incognito.svg"}
                                            width={13}
                                            height={12}
                                            alt="icon"
                                          />
                                        </div>
                                        <p className="text-xs">
                                          {data.question}
                                        </p>
                                      </button>
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              <></>
                            )}
                          </motion.div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {/* Questions Section */}
                      <motion.div
                        layout
                        transition={{ duration: 0.5 }}
                        className={`${
                          !question ? "pt-14" : "pt-4"
                        } flex flex-col gap-8`}
                      >
                        {stepOneQuestions.map((data, index) => (
                          <div
                            key={index}
                            className="border-t border-opacity-5 pt-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <p className="font-semibold text-xs text-black text-opacity-50">
                                  Question {index + 1} out of
                                  {`${" "} ${stepOneQuestions.length}`}
                                </p>
                                <h1
                                  className={`${
                                    index === 0
                                      ? "text-opacity-85"
                                      : "text-opacity-40"
                                  } font-medium text-lg text-black text-opacity-85`}
                                >
                                  {data.question}
                                </h1>
                              </div>
                              <button
                                onClick={() => handleStepOneQuestions(data.id)}
                              >
                                <Image
                                  src={
                                    questionexp !== data.id
                                      ? "/icons/add.svg"
                                      : "/icons/substract.svg"
                                  }
                                  width={17}
                                  height={18}
                                  alt="icon"
                                />
                              </button>
                            </div>
                            {questionexp == data.id ? (
                              <>
                                {/* More clarification on question */}
                                {data.answer.map((answer, index) => (
                                  <motion.div
                                    key={index}
                                    layout
                                    transition={{ duration: 0.5 }}
                                    className={`${
                                      !moreclarificationonquestion
                                        ? "w-fit"
                                        : "w-full"
                                    } my-2 bg-[#DFEBF680] bg-opacity-50 rounded p-2`}
                                  >
                                    <button
                                      onClick={handleMoreClarificationQuestion}
                                      className="w-full flex justify-between items-center gap-2"
                                    >
                                      <p className="font-semibold text-[11px] text-[#2E5DB0]">
                                        ✨ {answer.Q}
                                      </p>
                                      <Image
                                        src={
                                          !moreclarificationonquestion
                                            ? "/icons/addincircle.svg"
                                            : "/icons/addincircle_blue.svg"
                                        }
                                        width={13}
                                        height={12}
                                        alt="icon"
                                      />
                                    </button>
                                    {/* {moreclarificationonsection ? (
                                    <>
                                    <div className="mt-2 flex flex-wrap gap-4">
                                    {moreClarificationQuestions.map(
                                      (data, index) => (
                                        <button
                                        key={index}
                                        className="p-2.5 bg-white rounded-3xl flex items-center gap-2"
                                        >
                                        <div
                                        className={`${
                                          index === 1
                                          ? "bg-[#FFDEDF]"
                                          : "bg-[#DDE3EE80] bg-opacity-50"
                                        } p-1  rounded-full flex justify-center items-center`}
                                        >
                                        <Image
                                        src={"/icons/incognito.svg"}
                                        width={13}
                                        height={12}
                                        alt="icon"
                                        />
                                        </div>
                                        <p className="text-xs">
                                        {data.question}
                                        </p>
                                        </button>
                                        )
                                        )}
                                        </div>
                                        </>
                                        ) : (
                                          <></>
                                        )} */}
                                  </motion.div>
                                ))}
                                <textarea
                                  placeholder="Type to respond"
                                  className="p-2 w-full min-h-[10rem] bg-[#F8F8F8] outline-none text-sm rounded"
                                  type="text"
                                />
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </>
                  )}
                </div>
                {getstarted ? (
                  <div className="px-4 py-6 bg-[#F2F2F2] flex justify-center items-center">
                    <button
                      onClick={handleGetStarted}
                      className="flex justify-center items-center text-[#2E5DB0]"
                    >
                      <span className="font-semibold">Get Started</span>
                      <Image
                        src={"/icons/arrow_right.svg"}
                        width={25}
                        height={24}
                        alt="icon"
                      />
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-full md:w-[30%] flex-col gap-6">
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
            <div className="w-full min-h-[20rem] bg-[#000000] opacity-5 rounded-2xl"></div>
          </div>
        </motion.div>
      </div>
      <Accordion/>
    </main>
  );
}
