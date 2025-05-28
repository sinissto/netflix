import "./list.scss";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listItem/ListItem.jsx";
import { useRef, useState } from "react";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className={"list"}>
      <span className={"listTitle"}>Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlinedIcon
          className={"sliderArrow left"}
          style={{ display: !isMoved && "none" }}
          onClick={() => handleClick("left")}
        />

        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>

        <ArrowForwardIosOutlinedIcon
          className={"sliderArrow right"}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
