import{ useState } from "react";

//Squareコンポーネント
function Square() {
  //ボタンの機能を作る
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue("X");
  }
  //ボタンを用意する
  return(
    //属性とイベントハンドラを設定
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
