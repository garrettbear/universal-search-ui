import { useState } from "react";
import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState("Summ");
  // const addFilter = (type) => {
  //   let currentValue = inputValue;
  //   setInputValue(`${type}:Summer Hot Show Q1 2021 ${currentValue}`);
  // };
  return (
    <div className="App">
      <div class="gds-search gds-search--shown">
        <div class="gds-search__input-holder">
          <div class="gds-form-group gds-search__form-group">
            <div class="gds-form-group__input-group">
              <input
                class="gds-form-group__text-input -bor-rad-b-0"
                type="text"
                placeholder="Search..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
              />
            </div>
          </div>

          <ul class="gds-search__typeahead">
            <ul class="gds-search__filter-items">
              <li
                class="gds-search__typeahead-item"
                // onClick={() => addFilter("Advertiser")}
              >
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-user"></i>
                </div>
                <div className="gds-search__result-name">
                  Summer Hot Show Q1 2021
                </div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Advertiser</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-user"></i>
                </div>
                <div className="gds-search__result-name">2023 Summer Jam</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Advertiser</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-users"></i>
                </div>
                <div className="gds-search__result-name">72 &amp; Summer</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Agency</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-tag"></i>
                </div>
                <div className="gds-search__result-name">Summer 2021</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Tag</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-bullhorn"></i>
                </div>
                <div className="gds-search__result-name">Summer</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Campaign Type</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-ad"></i>
                </div>
                <div className="gds-search__result-name">Summer</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Unit Type</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-industry"></i>
                </div>
                <div className="gds-search__result-name">Summer</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Industry</span>
                </div>
              </li>
              <li class="gds-search__typeahead-item">
                <div className="gds-search__result-icon">
                  <i class="fas fa-fw fa-briefcase"></i>
                </div>
                <div className="gds-search__result-name">Summer</div>
                <div className="gds-search__result-type">
                  <span class="gds-badge">Business Unit</span>
                </div>
              </li>
            </ul>
            <li class="gds-search__typeahead-item gds-search__typeahead-item--filter">
              <div className="gds-search__result-icon">
                <i class="fas fa-fw fa-search"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span class="gds-badge gds-badge--dark -color-bg-dk-5">
                  enter ⏎
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
