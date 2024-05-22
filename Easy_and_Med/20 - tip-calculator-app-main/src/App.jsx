import { useState } from 'react'
import dollaricon from './images/icon-dollar.svg'
import personicon from './images/icon-person.svg'
import {
  Input5perc,
  Input10perc,
  Input15perc,
  Input25perc,
  Input50perc,
  Inputfreeperc,
  DivNumOP,
  AlertP,
} from './styles/STYLED/index'

function App() {
  const [selectedPerc, setSelectedPerc] = useState(0)
  const [billStateValue, setBillStateValue] = useState(0)
  const [nopState, setNOPStateValue] = useState(1)
  const [resetState, setResetState] = useState(0)

  function getCustomValue(e) {
    const custom = parseFloat(e.target.value)
    if (custom) {
      setSelectedPerc(custom)
    }
  }

  function getNOPValue(e) {
    const NOP = parseInt(e.target.value)
    setNOPStateValue(NOP)
  }
  function getBillValue(e) {
    const billValue = parseFloat(e.target.value)
    if (billValue) {
      setBillStateValue(billValue)
    }
  }
  function setActive(e) {
    if (e.target.value === '5%') {
      setSelectedPerc(5)
    } else if (e.target.value === '10%') {
      setSelectedPerc(10)
    } else if (e.target.value === '15%') {
      setSelectedPerc(15)
    } else if (e.target.value === '25%') {
      setSelectedPerc(25)
    } else if (e.target.value === '50%') {
      setSelectedPerc(50)
    } else if (e.target.placeholder === 'Custom') {
      setSelectedPerc(0)
    } else {
      setSelectedPerc(0)
    }
  }
  function resetApp() {
    setSelectedPerc(0)
    setBillStateValue(0)
    setNOPStateValue(1)
    setResetState(0)
    const bill_value = document.getElementById('bill')
    bill_value.value = 0
    const num_op_value = document.getElementById('num_op')
    num_op_value.value = 1
    const any_perc_tip = document.getElementById('any_perc_tip')
    any_perc_tip.value = 0
    
  }

  const total = ((billStateValue * selectedPerc) / 100).toFixed(2)
  const perPerson = Number((total / nopState).toFixed(2))
  return (
    <>
      <h1>SPLITTER</h1>
      <main>
        <div id="input_side_box">
          <section id="bill_section">
            <h2>Bill</h2>
            <div className="input_box">
              <img src={dollaricon} alt="Dollar Icon" />
              <input id="bill" onChange={getBillValue} placeholder="0.00" />
            </div>
          </section>
          <section id="select_tip_section">
            <h2 id="title_tip">Select Tip %</h2>
            <Input5perc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="perc5_tip"
              type="button"
              value="5%"
            />
            <Input10perc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="perc10_tip"
              type="button"
              value="10%"
            />
            <Input15perc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="perc15_tip"
              type="button"
              value="15%"
            />
            <Input25perc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="perc20_tip"
              type="button"
              value="25%"
            />
            <Input50perc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="perc50_tip"
              type="button"
              value="50%"
            />
            <Inputfreeperc
              selectedPerc={selectedPerc}
              onClick={setActive}
              id="any_perc_tip"
              type="text"
              placeholder="Custom"
              onChange={getCustomValue}
            />
          </section>
          <section id="number_o_p_section">
            <div id="text_op">
              <AlertP nopState={nopState}>Can't be zero</AlertP>
              <h2>Number of People</h2>
            </div>
            <DivNumOP
              nopState={nopState}
              id="inputbox_num_op"
              className="input_box"
            >
              <img src={personicon} alt="Dollar Icon" />
              <input
                id="num_op"
                onChange={getNOPValue}
                type="text"
                placeholder="1"
              />
            </DivNumOP>
          </section>
        </div>
        <section id="results_section">
          <div className="result_tip_box">
            <div className="results_text_boxes">
              <h2>Tip Amount</h2>
              <h3>/ person</h3>
            </div>
            <p>${perPerson ? perPerson : '0.00'}</p>
          </div>
          <div className="result_tip_box">
            <div className="results_text_boxes">
              <h2>Total</h2>
              <h3>/ person</h3>
            </div>
            <p>${total}</p>
          </div>
          <button id='reset_button' onClick={resetApp}>RESET</button>
        </section>
      </main>
    </>
  )
}

export default App
