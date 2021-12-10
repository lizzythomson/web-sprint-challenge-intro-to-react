import React, { useState } from "react";
import styled from "styled-components";
import Character from "./Character";

const StyledCharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Characters = ({ characters }) => {
  const [activeExpand, setActiveExpand] = useState(null);

  const markActive = (id) => {
    if (activeExpand !== id) {
      setActiveExpand(id);
    } else {
      setActiveExpand(null);
    }
  };

  return (
    <StyledCharacterContainer>
      {characters.map((character) => {
        return (
          <Character
            key={character.name}
            character={character}
            onClick={() => markActive(character.name)}
            isExpanded={activeExpand === character.name}
          />
        );
      })}
    </StyledCharacterContainer>
  );
};

export default Characters;
