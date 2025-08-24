import React, { useState, useCallback, useEffect, useMemo } from "react";
import Page from "../components/Page";

export default function RandomStringGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useDigits, setUseDigits] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [value, setValue] = useState("");

  const pool = useMemo(() => {
    let chars = "";
    if (useUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useDigits) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";
    return chars || "abcdefghijklmnopqrstuvwxyz";
  }, [useUpper, useLower, useDigits, useSymbols]);

  const generate = useCallback(() => {
    let out = "";
    const array = new Uint32Array(length);
    if (window.crypto?.getRandomValues) {
      window.crypto.getRandomValues(array);
      for (let i = 0; i < length; i++) {
        out += pool[array[i] % pool.length];
      }
    } else {
      for (let i = 0; i < length; i++) {
        out += pool[Math.floor(Math.random() * pool.length)];
      }
    }
    setValue(out);
  }, [length, pool]);

  useEffect(() => {
    generate();
  }, [length, pool, generate]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      alert("Copied to clipboard");
    } catch (_) {}
  };

  return (
    <Page title="Random String Generator (Hooks)">
      <div className="grid gap-6">
        <label>
          Length:
          <input
            type="number"
            min={4}
            max={256}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} />
          Uppercase
        </label>
        <label>
          <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} />
          Lowercase
        </label>
        <label>
          <input type="checkbox" checked={useDigits} onChange={(e) => setUseDigits(e.target.checked)} />
          Digits
        </label>
        <label>
          <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
          Symbols
        </label>
        <button onClick={generate}>Regenerate</button>
        <input value={value} readOnly />
        <button onClick={copy}>Copy</button>
      </div>
    </Page>
  );
}