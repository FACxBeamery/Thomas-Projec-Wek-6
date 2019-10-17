import React from "react";
import styles from "../index.css";
import Square from "./Square.js";

const Board = (props) => {
	return (
		<div>
			<div className={styles.boardRow}>
				<Square
					id={0}
					value={props.squares[0]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={1}
					value={props.squares[1]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={2}
					value={props.squares[2]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
			</div>
			<div className={styles.boardRow}>
				<Square
					id={3}
					value={props.squares[3]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={4}
					value={props.squares[4]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={5}
					value={props.squares[5]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
			</div>
			<div className={styles.boardRow}>
				<Square
					id={6}
					value={props.squares[6]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={7}
					value={props.squares[7]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
				<Square
					id={8}
					value={props.squares[8]}
					squares={props.squares}
					setSquares={props.setSquares}
					xTurn={props.xTurn}
					setXTurn={props.setXTurn}
				/>
			</div>
		</div>
	);
};

export default Board;
