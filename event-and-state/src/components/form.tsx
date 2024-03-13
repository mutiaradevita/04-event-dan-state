import { rejects } from "assert";
import { resolve } from "path";
import { useState } from "react";

export default function Form() {
    const [jawaban, setJawaban] = useState('');
    const [error, setError] = useState<Error | null>(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Yay... Jawaban Benar!</h1>
    }

    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err as Error);
        }
    }

    function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setJawaban(e.target.value);
    }

    return (
        <>
            <div className="w-full max-w-xs">
                <h2>Tebak Nama Hewan</h2>
                <p>Hewan apa yang ditakuti oleh doraemon?</p>
                <form
                    className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
                    onSubmit={handleSubmit}>
                    <textarea
                        value={jawaban}
                        onChange={handleTextareaChange}
                        disabled={status === 'submitting'}
                    />
                    <br />
                    <button
                        className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                        disabled={jawaban.length === 0 || status === 'submitting'}>
                        Submit
                    </button>
                    {error !== null && <p className="Error text-red-500 text-sm">{error.message}</p>}
                </form>
            </div>
        </>
    );
}

function submitForm(jawaban : string) {
    // Anggap kode ini melakukan *request*
    return new Promise<void>((resolve, reject) => {
        setTimeout(()=> {
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawaban salah. Silahkan coba lagi!'));
            } else {
                resolve();
            }
        }, 500); // set timeout selama 0,5 detik
    });
}

export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState('');
    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e : React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
       // setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e : React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
        // setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Silahkan isi nama lengkap anda</h2>
            <label className="block w-full m-2">
                Nama depan:
                <input className="text-sm text-black m1-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>

            <label className="blok w-full m-2">
                Nama belakang:
                <input className="text-sm text-black m1-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>Nama lengkap Anda adalah : <b className="text-blue-600">{fullName}</b></p>
        </>
    );
}