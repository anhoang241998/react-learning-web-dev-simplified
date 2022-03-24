import React from "react"
import IngredientList from "./IngredientList"

export default function Recipe(props) {
	const { name, cookTime, servings, instruction, ingredients } = props

	return (
		<div>
			<div>
				<h3>{name}</h3>
				<div>
					<button>Edit</button>
					<button>Delete</button>
				</div>
			</div>
			<div>
				<span>Cook Time:</span>
				<span>{cookTime}</span>
			</div>
			<div>
				<span>Servings:</span>
				<span>{servings}</span>
			</div>
			<div>
				<span>Instructions:</span>
				<div>{instruction}</div>
			</div>
			<div>
				<span>Ingredient:</span>
				<IngredientList ingredients={ingredients} />
			</div>
		</div>
	)
}
