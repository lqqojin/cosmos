import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BsSearch, BsYoutube } from 'react-icons/bs';

export default function SearchHeader() {
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault(); // submit 버튼을 누르면 페이지 refresh 되기 때문에 필요하지 않다면 해당 이벤트 넣기
    if (text.trim().length === 0) {
      return;
    }
    navigate(`/videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          value={text}
          placeholder="Search..."
          onChange={e => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
