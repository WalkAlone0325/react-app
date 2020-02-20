import * as contants from "./contants";

// 初始默认的state
const defaultState = {
  myData: null
};

export default (state = defaultState, action) => {
  // 由于state是引用型，不能直接修改，否则是检测不到state发生变化的。因此需要先复制一份进行
  // 修改，然后再返回新的state
  let newState = Object.assign({}, state);
  switch (action.type) {
    case contants.SET_DATA:
      newState.myData = action.data;
      return newState;

    default:
      return state;
  }
};
