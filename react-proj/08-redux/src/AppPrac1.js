// import BankBox from "./components/Prac1Bank";
import { BankContainer } from "./containers/Prac1Containers";
// containers 폴더 : redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서 생성
// components 폴더 :  redux store에 직접적으로 접근하지 않고,보통 presentational 컴포넌트만 저장.

function AppPrac1() {
  return (
    <div>
      <BankContainer />
    </div>
  );
}

export default AppPrac1;
