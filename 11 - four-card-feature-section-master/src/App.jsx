import React from 'react'
import Tool from './components/Tool'
import lupa from './images/icon-supervisor.svg'
import casa from './images/icon-team-builder.svg'
import lampada from './images/icon-karma.svg'
import monitor from './images/icon-calculator.svg'

function App() {
  return (
    <div id="main_container">
      <div id="text_container">
        <h1 className="title">
          Reliable, efficient delivery <br />
          <span className="title" id="subtitle">
            Powered by Technology
          </span>
        </h1>
        <p id="description">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <main id="tools_container">
        <div className="fixed_width" id='first_tool'>
          <Tool
            bordercolor={'blue'}
            title={'Supervisor'}
            desc={'Monitors activity to identify project roadblocks'}
            img={lupa}
          />
        </div>
        <div className="fixed_width" id="center_tool_boxes">
          <Tool
            bordercolor={'red'}
            title={'Team Builder'}
            desc={
              'Scans our talent network to create the optimal team for your project'
            }
            img={casa}
          />
          <Tool
            bordercolor={'yellow'}
            title={'Karma'}
            desc={'Regularly evaluates our talent to ensure quality'}
            img={lampada}
          />
        </div>
        <div className="fixed_width" id='third_tool'>
          <Tool
            bordercolor={'darkblue'}
            title={'Calculator'}
            desc={
              'Uses data from past projects to provide better delivery estimates'
            }
            img={monitor}
          />
        </div>
      </main>
    </div>
  )
}

export default App
