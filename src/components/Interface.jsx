import { Affix, Button, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();
  return (
    <Affix position={{ bottom: 50, right: 20 }} zIndex={1000}>
    <Stack>
      {animations.map((animation, index) => (
        <Button
          key={animation}
          variant={index === animationIndex ? "filled" : "light"}
          onClick={() => setAnimationIndex(index)}
          style={{ zIndex: 1000 }} 
        >
          {animation}
        </Button>
      ))}
    </Stack>
  </Affix>
  
  );
};

export default Interface;