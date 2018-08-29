import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Instructors from './Instructors';
import WhatToLearn from './WhatToLearn';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/python/python';
import './MainSection.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100vw'
};

const codeComplete = `semester = 'WS18/19'
start = '15.10.2018'
time = '13:00 - 15:00'
weekday = 'Monday'
location = 'Poolraum'

print('''
  Introduction to python for natural scientists
  When: {} every {}
  Where: {}
  Start: {}
'''.format(time, weekday, location, start))
`;

interface State {
  code: string;
  writeCode: boolean;
}

class MainSection extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      code: '',
      writeCode: true
    };
  }

  componentDidMount() {
    this.startCodeWriting();
  }

  private startCodeWriting(index: number = 0) {
    if (!this.state.writeCode) {
      return;
    }
    this.setState({
      code:
        codeComplete.slice(0, index++) +
        (index < codeComplete.length ? '|' : '')
    });
    if (index < codeComplete.length) {
      setTimeout(() => this.startCodeWriting(index), 50);
    }
  }

  private showComplete() {
    this.setState({ code: codeComplete, writeCode: false });
  }

  render() {
    return (
      <div style={styles}>
        <div
          style={{
            maxWidth: '600px',
            margin: 'auto',
            padding: '0.2rem'
          }}
        >
          <h2 style={{ margin: '7rem' }}>
            Introduction to python for natural scientists
          </h2>
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <CodeMirror
              onFocus={this.showComplete.bind(this)}
              className="code-editor"
              value={this.state.code}
              options={{
                mode: 'python',
                theme: 'material',
                lineNumbers: true,
                readOnly: this.state.code !== codeComplete
              }}
            />
          </div>
          <WhatToLearn />
          <Instructors />

          <p
            style={{
              margin: '2rem 0'
            }}
          >
            Dieser Kurs wird von Mitgliedern von PhysikOnline angeboten und
            bringt keine CP.
          </p>
        </div>
      </div>
    );
  }
}

export default MainSection;
