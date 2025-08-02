import Square from "./Square";

function Board() {
  return (
    <>
      <div className="status">status</div>
      <div className="board">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
