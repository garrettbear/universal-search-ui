import "./App.scss";

function App() {
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
                value="Summer"
                data-gds-search-input="0"
              />
            </div>
          </div>
          <ul class="gds-search__typeahead">
            <li class="gds-search__typeahead-item" gds-typeahead-index="0">
              <div className="gds-search__result-icon">
                <i class="fas fa-fw fa-search"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span class="gds-badge">In this campaign</span>
              </div>
            </li>
            <li class="gds-search__typeahead-item" gds-typeahead-index="1">
              <div className="gds-search__result-icon">
                <i class="fas fa-fw fa-search"></i>
              </div>
              <div className="gds-search__result-name">Summer</div>
              <div className="gds-search__result-type">
                <span class="gds-badge">In this advertiser</span>
              </div>
            </li>
            <li class="gds-search__typeahead-item" gds-typeahead-index="2">
              <div className="gds-search__result-name">
                Honda Summer Sale 2019
              </div>
              <div className="gds-search__result-type">
                <span class="gds-badge gds-badge--dark -color-bg-dk-5">
                  Campaign
                </span>
              </div>
            </li>

            <li class="gds-search__typeahead-item" gds-typeahead-index="2">
              <div className="gds-search__result-name">
                In-Screen Display - Flex - 320x50 - Mobile - Breakfast
              </div>
              <div className="gds-search__result-type">
                <span class="gds-badge gds-badge--dark -color-bg-dk-5">
                  Ad Line
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
