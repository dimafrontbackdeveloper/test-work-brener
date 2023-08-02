import { Route, Routes } from 'react-router-dom'
import Header from './app/components/ui/Header/Header'
import './global.css'
import './nulling.css'
import HomePage from './pages/Home'
import RectanglesPage from './pages/Rectangles'
import VerticalScrollPage from './pages/VerticalScroll'

function App() {
	return (
		<div>
			<Header />
			<div className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/vertical-scroll" element={<VerticalScrollPage />} />
					<Route path="/rectangles" element={<RectanglesPage />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
