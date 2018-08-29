import * as React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/python/python";
import "./Header.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100vw"
};

const codeComplete = `wann = 'jeden Montag'
wo = 'Poolraum'

print('''
  Einführung in Python für Naturwissenschaftler
  Wann: {}
  Wo: {}
'''.format(wann, wo))
`;

interface State {
  code: string;
}

class MainSection extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = {
      code: ''
    }
  }

  componentDidMount() {
    this.startCodeWriting();
  }
  
  private startCodeWriting(index = 0) {
    this.setState({ code: codeComplete.slice(0, index++) + (index < codeComplete.length ? '|' : '') });
    if (index < codeComplete.length) {
      setTimeout(() => this.startCodeWriting(index), 50)
    }
  }

  render() {
    return <div style={styles}>
      <div
        style={{
          maxWidth: "900px",
          margin: "3rem 0",
          padding: "1rem"
        }}
      >
        <h2>Einführung in Python für Naturwissenschaftler</h2>
        <div style={{ textAlign: "left" }}>
          <CodeMirror
            value={this.state.code}
            options={{
              mode: "python",
              theme: "material",
              lineNumbers: true,
              readOnly: this.state.code !== codeComplete
            }}
          />
        </div>
      </div>
    </div>
  }
}
  
);

export default MainSection;
