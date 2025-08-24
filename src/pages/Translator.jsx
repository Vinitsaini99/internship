import Page from "../components/Page";
import { useState } from "react";
import axios from "axios";
import { LoaderCircle } from "lucide-react";

export default function Translator() {
  const [textInput, setTextInput] = useState("");
  const [selectVale, setSelectVale] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTextTranslate = async () => {
    setLoading(true);
    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key":
            "6b29c2044cmsh16c00fccefd5d78p18f914jsnc5a4b359141d",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: `${textInput}`,
          source: "en",
          target: `${selectVale}`,
          format: "text",
        },
      };
      const response = await axios.request(options);
      setLoading(false);
      console.log(response?.data?.data?.translations[0]?.translatedText);
      setResult(response?.data?.data?.translations[0]?.translatedText);
    } catch (error) {
      setLoading(false);
      console.log(error?.message);
    }
  };

  console.log(textInput);
  console.log(selectVale);

  return (
    <Page title="English → Your Favourite Language (RapidAPI)">
      <div className="grid gap-6">
        <div className="flex flex-col items-center gap-6 px-4 w-full max-w-2xl mx-auto">
          <h1 className="pt-10 text-2xl sm:text-3xl font-bold text-center">Text Translator</h1>
          <div className="flex flex-col gap-4 w-full">
            <textarea
              name="input-text"
              onChange={(e) => setTextInput(e.target.value)}
              className="bg-white min-h-[100px] w-full border border-slate-700 outline-none rounded-lg text-lg px-4 py-2"
            />
            <textarea
              name="input-text"
              value={result}
              readOnly
              className="bg-white min-h-[100px] w-full border border-slate-700 outline-none rounded-lg text-lg px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="option" className="font-medium"> Your Selecting Language is = </label>
            <select
              name="value"
              onChange={(e) => setSelectVale(e.target.value)}
              className="bg-white px-3 py-2 rounded-lg border border-slate-700 outline-none cursor-pointer flex-1 dropdown "
            >
              <option value="">select</option>
              <option value="hi">Hindi</option>
              <option value="sa">Sanskrit</option>
              <option value="ur">Urdu</option>
              <option value="fa">Farsi</option>
            </select>
          </div>
          <button
            className="bg-blue-600 w-full sm:w-auto px-6 py-2 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
            onClick={handleTextTranslate}
          >
            {loading ? <LoaderCircle className="animate-spin" /> : "Translate"}
          </button>
        </div>
      </div>
    </Page>
  );
}
