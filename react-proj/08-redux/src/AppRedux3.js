import "./App.css";
import { Box1Container } from "./containers/BoxesContainers";

// containers 폴더 : redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더 :  redux store에 직접적으로 접근하지 않고,보통 presentational 컴포넌트만 저장한다.

function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
