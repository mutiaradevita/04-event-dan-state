export default function Tombol_1() {
    // menambahkan fungsi untuk menangani klik tombol
    function handleClick() {
        alert('Tombol telah ditekan!!!');
    }

    function handleMouseOver() {
        alert('Eits, mau mencet tombol ya?');
    }

    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            onMouseOver={handleMouseOver}
        >
            Ini tombol
        </button>
    );
}