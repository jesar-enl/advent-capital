import { AiOutlineLike } from 'react-icons/ai';
import { GiPayMoney } from 'react-icons/gi';
import { MdOutlineTouchApp } from 'react-icons/md';
import { TbMailFast } from 'react-icons/tb';

const cards = [
  {
    icon: <AiOutlineLike />,
    title: 'Trusted by people',
    description: 'Advent Capital has built a vast database of customers',
  },
  {
    icon: <TbMailFast />,
    title: 'Fast and easy Application',
    description: 'Convinient and easy online application process.',
  },
  {
    icon: <GiPayMoney />,
    title: 'Fast payout',
    description: 'Once approved payout will be processed within 24 hours.',
  },
  {
    icon: <MdOutlineTouchApp />,
    title: 'Personal touch',
    description:
      'We treat every customer individually and friendly with helpful staff.',
  },
];

export default function Card() {
  return (
    <div className="bg-gray-100 py-4 px-4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card}
          className="bg-black flex flex-col gap-4 justify-center rounded-lg shadow-lg items-center m-3 px-3 py-4"
        >
          <div className="text-green-500 mb-1 text-xl md:text-2xl">
            {card.icon}
          </div>
          <h2 className="text-green-500 mb-1 text-xl md:text-3xl text-center">
            {card.title}
          </h2>
          <p className="text-white text-lg md:text-xl text-center">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}
