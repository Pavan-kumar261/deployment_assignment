import React from "react";
import { Trans, withTranslation } from "react-i18next";
import "./App.css";
import "./i18n.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "en",
    };
  }

  onLanguageHandle = (event) => {
    let newLang = event.target.value;
    this.setState({ value: newLang });
    this.props.i18n.changeLanguage(newLang);
  };

  renderRadioButtons = () => {
    return (
      <div>
        <input
          checked={this.state.value === "en"}
          name="language"
          onChange={(e) => this.onLanguageHandle(e)}
          value="en"
          type="radio"
        />
        English &nbsp;
        <input
          name="language"
          value="ru"
          checked={this.state.value === "ru"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        Russian &nbsp;
        <input
          name="language"
          value="jp"
          checked={this.state.value === "jp"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        Japanese &nbsp;
        <input
          name="language"
          value="hi"
          checked={this.state.value === "hi"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        Hindi &nbsp;
        <input
          name="language"
          value="gk"
          checked={this.state.value === "gk"}
          type="radio"
          onChange={(e) => this.onLanguageHandle(e)}
        />
        Greek
      </div>
    );
  };

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Translate App</h1>
        <p className="radio_buttons">{this.renderRadioButtons()}</p>
        <h1>
          <Trans>{t("paragraph")}</Trans>
        </h1>
        <table>
          <tbody>
            <tr>
              <td>{t("author.title")}</td>
              <td>:</td>
              <td>{t("author.value")}</td>
            </tr>
            <tr>
              <td>{t("description.title")}</td>
              <td>:</td>
              <td>{t("description.value")}</td>
            </tr>
          </tbody>
        </table>

       
        <div style={{ marginTop: 40 }}>
          Learn more:&nbsp;
          <a href="https://react.i18next.com">https://react.i18next.js</a>
        </div>
      </div>
    );
  }
}

export default withTranslation()(App);
