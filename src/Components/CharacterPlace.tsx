import React from "react";
import styled from "styled-components";

type CharacterPlaceProps = {
  character: string;
  isVisible: boolean;
};
export default ({ character, isVisible }: CharacterPlaceProps): JSX.Element => {
  const CharacterPlace = styled.div`
    width: 25px;
    border-bottom: 2px solid black;
    display: block;
    margin: 5px;
    text-align: center;
    height: 25px
    font-size: 20px;
  `;
  const Spacer = styled.div`
    width: 25px;
    display: block;
    margin: 5px;
  `;
  return (
    <div onKeyDown={eve => console.log(eve)}>
      {character !== " " ? <CharacterPlace>{isVisible && character}</CharacterPlace> : <Spacer />}
    </div>
  );
};
