import React,{ useState }from 'react'; //useState 추가
import { Button, Fade } from 'reactstrap';

const R043_FunctionFade = () => {
  //ush사용
  const [fadeInOut, setfadeInOut] = useState(true);
  const toggle = () => {
    // 틀림 -> setfadeInOut = !setfadeInOut;
    //직접 값을 할당하는 것이 아니라, 함수를 호출하는 방식으로 상태를 변경
    setfadeInOut(!fadeInOut);
  }
  return (
    <div>
            <Button color='success' onClick={toggle}>Fade In/Out</Button>
            <Fade in={fadeInOut} tag="h1">
            Fade In/Out 영역
            </Fade>
          </div>
  );
};

export default R043_FunctionFade;