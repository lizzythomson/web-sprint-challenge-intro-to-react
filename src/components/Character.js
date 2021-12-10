// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacter = styled.div`
  width: 80%;
  border: 2px lightslategray solid;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 24%);
  border-radius: 10px;
  padding: 1%;
  margin: 1%;
  background-color: white;
  opacity: 80%;
`;

const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Character = ({ character, onClick, isExpanded }) => {
  return (
    <StyledCharacter onClick={onClick}>
      <StyledTitle>
        <h2>{character.name}</h2>
        <h2>+</h2>
      </StyledTitle>
      {isExpanded ? (
        <div>
          <p>Born: {character.birth_year} </p>
          <p>Height: {character.height}</p>
          <p>Skin Color: {character.skin_color}</p>
        </div>
      ) : null}
    </StyledCharacter>
  );
};

export default Character;
