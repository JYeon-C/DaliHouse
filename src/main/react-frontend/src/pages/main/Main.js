import "./css/Main.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyTitle from "../../components/MyTitle";
import MyButton from "../../components/MyButton";

import Slider_Volunteer from "./Slider_Volunteer";
import Slider_Adoption from "./Slider_Adoption";
import Slider_Spon from "./Slider_Spon";
import MagazineList from "./MagazineList";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const goVolunteer = () => {
    navigate(`/volunteerActivity`);
  };

  const goAdoption = () => {
    navigate(`/adoption`);
  };

  return (
    <div className="main">
      <h1>메인 페이지</h1>
      <MyHeader />
      <div>
        <img
          class="main_adv"
          src={process.env.PUBLIC_URL + `/assets/main_adv.png`}
        />
      </div>
      <div>
        <MyTitle
          titleText={"이번주 달리단 모집"}
          totalbutton={<MyButton text={"전체보기"} onClick={goVolunteer} />}
        />
        <Slider_Volunteer />
      </div>
      <div>
        <img
          class="main_volunteercs"
          src={process.env.PUBLIC_URL + `/assets/main_volunteercs.png`}
        />
      </div>
      <div>
        <MyTitle
          titleText={"새로운 가족을 찾아요!"}
          totalbutton={<MyButton text={"전체보기"} onClick={goAdoption} />}
        />
        <Slider_Adoption />
      </div>
      <div>
        <MyTitle
          titleText={"소중한 후원을 요청드려요"}
          totalbutton={<MyButton text={"전체보기"} />}
        />
        <Slider_Spon />
      </div>
      <div>
        <MyTitle
          titleText={"3월 달리 매거진"}
          totalbutton={<MyButton text={"전체보기"} />}
        />
        <div class="main_magazine">
          <div className="main_magazine_content">
            <div>
              <MagazineList />
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Main;
