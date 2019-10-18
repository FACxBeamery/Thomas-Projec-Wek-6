import React from "react";
import styles from "../index.css";
import Square from "./Square.js";

const renderSquare = (props, squareIndex) => {
	return (
		<Square
			id={squareIndex}
			value={props.squares[squareIndex]}
			squares={props.squares}
			setSquares={props.setSquares}
			p1Turn={props.p1Turn}
			setP1Turn={props.setP1Turn}
			winner={props.winner}
			setWinner={props.setWinner}
			boardFull={props.boardFull}
			setBoardFull={props.setBoardFull}
		/>
	);
};

const Board = (props) => {
	return (
		<div>
			<div className={styles.boardRow}>
				{renderSquare(props, 0)}
				{renderSquare(props, 1)}
				{renderSquare(props, 2)}
			</div>
			<div className={styles.boardRow}>
				{renderSquare(props, 3)}
				{renderSquare(props, 4)}
				{renderSquare(props, 5)}
			</div>
			<div className={styles.boardRow}>
				{renderSquare(props, 6)}
				{renderSquare(props, 7)}
				{renderSquare(props, 8)}
			</div>
		</div>
	);
};

export default Board;
