import React from 'react';
//import four components Description, Form, CurrentMove, History
import Description from './description-section';
import Form from './form-section';
import CurrentMove from './current-move-section';
import History from './history-section';

export default function Play() {
 return (
    <div className="game">
          <Description />
          <Form />
          <CurrentMove />
          <History />
    </div>
 )
}