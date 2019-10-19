import React from "react";
import styles from "../index.css";
import Square from "./Square.js";

const RenderSquare = (props, squareIndex) => {
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
				{RenderSquare(props, 0)}
				{/* <RenderSquare {{props}, {0}} /> */}
				{RenderSquare(props, 1)}
				{RenderSquare(props, 2)}
			</div>
			<div className={styles.boardRow}>
				{RenderSquare(props, 3)}
				{RenderSquare(props, 4)}
				{RenderSquare(props, 5)}
			</div>
			<div className={styles.boardRow}>
				{RenderSquare(props, 6)}
				{RenderSquare(props, 7)}
				{RenderSquare(props, 8)}
			</div>
		</div>
	);
};

export default Board;
