import React, { useState, useEffect } from "react";
import * as Styled from "./EarPhones.style";
import { EarphonesImg } from "../../assets/images";
import { useRecoilValue } from "recoil";
import { musicAtom } from "../../atoms";

function EarPhones() {
  const music = useRecoilValue(musicAtom);
  const [volume, setVolume] = useState<number>(1);

  const volumeUp = () => {
    if (volume < 1) {
      setVolume((prevVolume) => prevVolume + 0.1);
    }
  };

  const volumeDown = () => {
    if (volume > 0.1) {
      setVolume((prevVolume) => prevVolume - 0.1);
    }
  };

  useEffect(() => {
    music.volume = volume;
  }, [volume]);

  return (
    <Styled.Container>
      <Styled.PlusButton onClick={volumeUp}>+</Styled.PlusButton>
      <Styled.MinusButton onClick={volumeDown}>-</Styled.MinusButton>
      <Styled.EearPhones src={EarphonesImg} />
    </Styled.Container>
  );
}

export default EarPhones;
