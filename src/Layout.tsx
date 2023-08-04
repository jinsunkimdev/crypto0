// Layout.tsx
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";
import styled from "styled-components";

const LayoutContainer = styled.div`
  // 여기에 필요한 스타일 정의
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: ${(props) => props.theme.btnColor};
  padding: 10px 20px;
  border-radius: 10px;
  color: ${(props) => props.theme.accentColor};
`;

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return (
    <LayoutContainer>
      <ToggleButton onClick={toggleDarkAtom}>Toggle Mode</ToggleButton>
      {children}
    </LayoutContainer>
  );
}

export default Layout;
