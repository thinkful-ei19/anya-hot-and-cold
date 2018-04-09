import React from 'react';
import Header from './header-section';
import Play from './play-section';
import Nav from './nav-section.js';

export default function Game() {
    return (
      <div className="game">
        <Nav />
        <Header />
        <Play />
      </div>
    )
};