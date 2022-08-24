import React from "react";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

type KakaoAuth = {
  id: string;
  nickname?: string;
  email?: string;
  phone_number?: string;
};

export const initKakao = () => {
  if (process.browser && !window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
  }
};

export default function KakaoLoginButton() {
  const requestLogin = (auth: KakaoAuth) => {
    //로그인 처리
    console.log(auth);
  };

  const successCallback = () => {
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function (res: any) {
        const {
          id,
          kakao_account: {
            email,
            profile: { nickname },
            phone_number,
          },
        } = res;

        requestLogin({
          id,
          nickname,
          email,
          phone_number,
        });
      },
      fail: function (error: any) {
        alert(JSON.stringify(error));
      },
    });
  };

  const handleKakaoLoginClick = () => {
    if (!window && !window.Kakao && !window.Kakao.Auth) return;
    window.Kakao.Auth.login({
      success: successCallback,
      fail: (err: any) => {
        console.log(err);
      },
    });
  };

  return (
    <Wrapper onClick={handleKakaoLoginClick} provider="Kakao">
      <ButtonText>카카오로 3초만에 시작하기</ButtonText>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ provider: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;

  width: 383px;
  height: 49px;
  border-radius: 4px;

  background-color: #ffd000;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-weight: bold;
  color: #1c1c1c;
  font-size: 16px;
`;
