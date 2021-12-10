// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Characters = ({ characters }) => {
  return (
    <StyledCharacterContainer>
      {characters.map((character) => {
        return (
          <StyledCharacter>
            <StyledTitle>
              <h2>{character.name}</h2>
              <h2>+</h2>
            </StyledTitle>
            <p className="expandButton">Born: {character.birth_year} </p>
            <p className="expandButton">Height: {character.height}</p>
            <p className="expandButton">Skin Color: {character.skin_color}</p>
          </StyledCharacter>
        );
      })}
    </StyledCharacterContainer>
  );
};

export default Characters;
