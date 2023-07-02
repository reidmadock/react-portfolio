import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import React from 'react';

export default function Header() {
  return (
    <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="about-me">AboutMe</NavLink>
        <NavLink to="projects">Projects</NavLink>
    </nav>);
}