import styled from "styled-components";
import Backgroud from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  color: #eeeeee;
  letter-spacing: -0.41px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-left: 25px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;

  color: #fff;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
`;