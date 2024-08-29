import { AiOutlineLike } from "react-icons/ai";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineTouchApp } from "react-icons/md";
import { TbMailFast } from "react-icons/tb";

const cards = [
  {
    icon: <AiOutlineLike />,
    title: "Trusted by people",
    description: "Advent Capital has built a vast database of customers",
  },
  {
    icon: <TbMailFast />,
    title: "Fast and easy Application",
    description: "Convinient and easy online application process.",
  },
  {
    icon: <GiPayMoney />,
    title: "Fast payout",
    description: "Once approved payout will be processed within 24 hours.",
  },
  {
    icon: <MdOutlineTouchApp />,
    title: "Personal touch",
    description:
      "We treat every customer individually and friendly with helpful staff.",
  },
];

export default function Card() {
  return (
    <section className="bg-white px-4 py-4">
      <div className="mx-auto max-w-xl text-center xl:max-w-2xl">
        <h2 className="mb-6 text-3xl font-bold leading-tight text-green-500 sm:text-4xl xl:text-5xl">
          Let&#39;s just get you started!
        </h2>
        <p className="mb-4">
          Here is why this platform is suitable in applying for our affordable loans.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-1 md:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card}
            className="m-3 block items-center justify-center gap-4 rounded-lg bg-gray-900 px-3 py-4 shadow-lg"
          >
            <div className="mb-1 text-xl text-green-500 md:text-2xl">
              {card.icon}
            </div>
            <h2 className="mb-1 text-base font-semibold text-green-500 sm:text-lg">
              {card.title}
            </h2>
            <p className="block text-sm text-white sm:mt-1 sm:text-base">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
