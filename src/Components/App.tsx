import React, { useState, useEffect } from "react";
import CharacterPlace from "./CharacterPlace";
import styled from "styled-components";

export default function App() {
  const [choosenWord, setChooseWord] = useState("");
  const [visibleCharacters, setVisibleCharacters]: [any, any] = useState([]);

  useEffect(() => {
    document.addEventListener("keypress", onKeyPressed, false);

    return () => {
      document.removeEventListener("keypress", onKeyPressed, false);
    };
  });
  const onKeyPressed = (event: KeyboardEvent) => {
    const regexToValidate = /[a-zA-Z]/;
    if (regexToValidate.test(event.key)) {
      let updatedVisibleCharacters = [...visibleCharacters];
      updatedVisibleCharacters.push(event.key);
      setVisibleCharacters(updatedVisibleCharacters);
    }
  };
  const CharacterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    margin: 5px;
  `;
  const FullContainer = styled.div`
    width: 100vw;
    height: 100vh;
  `;
  useEffect(() => {
    setChooseWord("first word");
    setVisibleCharacters(["i", "s", "t"]);
  }, []);

  const charactersDisplay = choosenWord
    .split("")
    .map(char => (
      <CharacterPlace
        key={Math.floor(Math.random() * 10000)}
        character={char}
        isVisible={visibleCharacters.find((visChar: string) => visChar === char) ? true : false}
      />
    ));
  return (
    <FullContainer>
      <CharacterContainer>{charactersDisplay}</CharacterContainer>
    </FullContainer>
  );
}
