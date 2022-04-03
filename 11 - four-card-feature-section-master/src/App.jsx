import React from 'react'
import Tool from './components/Tool'
import lupa from "./images/icon-supervisor.svg"
import casa from "./images/icon-team-builder.svg"
import lampada from "./images/icon-karma.svg"
import monitor from "./images/icon-calculator.svg"

function App() {
  return (
    <div id="main_container">
      <div id="text_container">
        <h1>
          Reliable, efficient delivery
          <span>Powered by Technology</span>
        </h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <main id="tools_container">
        <Tool
          title={'Supervisor'}
          desc={'Monitors activity to identify project roadblocks'}
          img={lupa}
        />
        <Tool
          title={'Team Builder'}
          desc={
            'Scans our talent network to create the optimal team for your project'
          }
          img={casa}
        />
        <Tool
          title={'Karma'}
          desc={'Regularly evaluates our talent to ensure quality'}
          img={lampada}
        />
        <Tool
          title={'Calculator'}
          desc={
            'Uses data from past projects to provide better delivery estimates'
          }
          img={monitor}
        />
      </main>
    </div>
  )
}

export default App
