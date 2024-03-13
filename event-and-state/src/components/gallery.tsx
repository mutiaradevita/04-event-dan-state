import { useState } from 'react';
import { sculptureList } from "@/data/article"; // ambil data yang sudah ada

export default function Gallery() {
    // let index = 0; // index data mulai dari 0
    const [index, setIndex] = useState(0);

    function handleClick() {
        setIndex(prevIndex => (prevIndex + 1) % sculptureList.length);  // counter index + 1, utk melihat data selanjutnya
    }

    function handleClickPrevious() {
        setIndex(prevIndex => prevIndex === 0 ? sculptureList.length - 1 : prevIndex - 1);  // counter index - 1, utk melihat data sebelumnya
    }

    let sculpture = sculptureList[index]; // membaca data sesuai dengan index

    return (
        <>
             <button
                onClick={handleClickPrevious}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Sebelumnya </button>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya </button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}