import { ADD_GALLERY } from "../actions/types";

export const addGallery = (gallery) => ({
  type: ADD_GALLERY,
  gallery,
});

const initialState = [
  {
    id: 1,
    regiDate: "2020.9.27",
    title: "코디 Tip",
    writer: "test1",
    image: "뭘까요",
    contents: "제가 입은 오늘의 코디 입니다~~~",
    description: "상의는 ~~ 하의는 ~~ 매치했어요ㅎㅎ",
  },
  {
    id: 2,
    regiDate: "2020.9.27",
    title: "Match",
    writer: "test2",
    image: "뭘까요",
    contents: "안녕하세요!",
    description: "제가 입은 오늘의 코디 입니다~~~",
  },
];

const galleries = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GALLERY:
      return state.concat(action.gallery);
    default:
      return state;
  }
};

export default galleries;
