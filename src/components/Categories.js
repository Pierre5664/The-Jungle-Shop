import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
            <h3>Catégories</h3>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='lmj-categories-select'
			>
				<option value=''>Choisissez une catégorie de plante</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories