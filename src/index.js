import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./components/Main";
import AllCampuses from "./components/Campuses/AllCampuses";
import SingleCampus from "./components/Campuses/SingleCampus";
import AllStudents from "./components/Students/AllStudents";
import SingleStudent from "./components/Students/SingleStudent";

import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";

import store from "./store/index.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<div className="application">
				<Navbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/campuses" element={<AllCampuses />} />
					<Route path="/campuses/:campusId" element={<SingleCampus />} />
					<Route path="/students" element={<AllStudents />} />
					<Route path="/students/:studentId" element={<SingleStudent />} />

				
				</Routes>
			</div>
		</Provider>
	</BrowserRouter>
);
