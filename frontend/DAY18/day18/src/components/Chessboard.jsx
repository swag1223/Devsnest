import "./chessboard.css";

function Block({ colCount, rowCount }) {
  return (
    <div className="block"
      style={{
        backgroundColor: rowCount % 2 === colCount % 2 ? "black" : "white",
      }}></div>
  );
}


function Row({ rowCount }) {
    return (
        <div className="row">
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((value, indx) =>
                    <Block colCount={value} key={indx} rowCount={rowCount}/>
                )
            }

        </div>
    )
}


function Chessboard() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="chessboard">
            {
                 arr.map((value , index) =>
                    <Row rowCount={value} key={index} />
                )

            }
           
        </div>
    )

}

export default Chessboard;