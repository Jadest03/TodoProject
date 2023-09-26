import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Layout from './Layout';
import TodoPage from './TodoPage';
import CalendarPage from './CalendarPage';
import AchievementPage from './AchievementPage';

function App() {
	return (
		<main className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route path='todo' element={<TodoPage />} />
						<Route path='calendar' element={<CalendarPage />} />
						<Route
							path='achievement'
							element={<AchievementPage />}
						/>
					</Route>

					<Route path='/' element={<Login />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
