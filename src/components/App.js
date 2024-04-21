import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../styles/App.css'
const AppComponent = () => {
	const [markdown, setMarkdown] = React.useState('')
	const [isLoading, setIsLoading] = React.useState(false)

	React.useEffect(() => {
		setIsLoading(true)
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000) // Simulating a delay of 1 second
		return () => clearTimeout(timer)
	}, [markdown])

	const handleChange = (e) => {
		setMarkdown(e.target.value)
	}

	return (
		<div className="app">
			<textarea
				className="textarea"
				value={markdown}
				onChange={handleChange}
				placeholder="Write your markdown here..."
			/>
			<div className="preview">
				{isLoading ? (
					<p className="loading">Loading...</p>
				) : (
					<ReactMarkdown>{markdown}</ReactMarkdown>
				)}
			</div>
		</div>
	)
}

const App = () => {
	return <AppComponent />
}

export default App
