"use client";
import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const ProjectPopup = () => {
  const { setPortfolioModal, portfolioModal } = useContext(context);
  return (
    <PopContainer nullValue={setPortfolioModal}>
      <div className="content">
        <div className="image">
          <img src="images/works/work9.jpg" alt="" />
        </div>
        <div className="desc">
          <div className="category">Graphics</div>
          <h4>Hello World Paper</h4>
          <p>
            Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus.
            Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et
            fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim
            quem quod cibo.
          </p>
          <a href="#" className="btn" data-text="View Project">
            View Project
          </a>
        </div>
      </div>
    </PopContainer>
  );
};
export default ProjectPopup;
