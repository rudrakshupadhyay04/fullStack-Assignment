
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = await fetch('http://localhost:3000/helpCenter/cards');
    const data = await response.json();
    setCards(data);
  };

  // Search ke basis par filter kiya hua cards array
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      
      <div className='bg-purple-100 h-72 flex flex-col justify-center items-center gap-4'>
        <h1 className=' text-4xl font-bold'>How can we help??</h1>
        <div className='flex items-center justify-between border shadow-2xl rounded-md border-black w-96 gap-2 bg-white py-2 px-2'>
          <input type="text" placeholder='search' className='outline-none w-80 ' onChange={handleSearch} />
          <button>
            <FiArrowRight className="hover:transform hover:translate-x-1 size-6" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around mt-10">
        <h1 className=' text-4xl font-bold'>All Cards</h1>
      </div>
      <div className="flex flex-row flex-wrap items-center py-28 justify-around pl-96 pr-96 gap-x-1 gap-y-16 overflow-hidden ">
        {filteredCards.map((card) => (
          <div key={card.id} className="border rounded-lg w-72 bg-slate-100 h-44">
            <div className="p-2 font-bold"><h2>{card.title}</h2></div>
            <hr />
            <div className="p-2">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
