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
'''.format(time, weekday, location, start))`;

interface CodeOutput {
  err?: { cmd?: string; code?: number };
  stdout?: string;
  stderr?: string;
}

interface State {
  code: string;
  writeCode: boolean;
  codeOutput: CodeOutput | null;
  editedCode: string;
}

class MainSection extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      code: '',
      writeCode: true,
      codeOutput: null,
      editedCode: ''
    };
  }

  componentDidMount() {
    this.startCodeWriting();
  }

  private startCodeWriting(index: number = 0) {
    if (!this.state.writeCode) {
      return;
    }
    const code =
      codeComplete.slice(0, index++) + (index < codeComplete.length ? '|' : '');
    this.setState({
      code,
      writeCode: codeComplete !== code
    });
    if (index < codeComplete.length) {
      setTimeout(() => this.startCodeWriting(index), 50);
    }
  }

  private showComplete() {
    this.setState({ code: codeComplete, writeCode: false });
  }

  private interpretPython() {
    let code = this.state.editedCode;
    if (this.state.writeCode) {
      this.showComplete();
      code = codeComplete;
    }
    fetch('https://safe-python-api.larsgroeber.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        language: 0,
        code
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          codeOutput: {
            stdout: data.output,
            stderr: data.errors
          }
        });
      })
      .catch(() => {
        this.setState({
          codeOutput: {
            stderr: 'Something went wrong! And its not your code...'
          }
        });
      });
  }

  private errorOutput(data: CodeOutput) {
    return data.stderr;
  }

  render() {
    const output = this.state.codeOutput ? (
      <div style={{ marginTop: '1rem' }}>
        <pre
          hidden={!this.state.codeOutput}
          style={{
            backgroundColor: '#ddd',
            padding: '0.5rem',
            paddingBottom: '0',
            margin: 0
          }}
        >
          {this.state.codeOutput!.stdout}
        </pre>
        <pre
          hidden={!this.state.codeOutput}
          style={{
            backgroundColor: '#ddd',
            padding: '0.5rem',
            paddingTop: '0',
            color: 'red',
            margin: 0
          }}
        >
          {this.errorOutput(this.state.codeOutput)}
        </pre>
      </div>
    ) : (
      ''
    );

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
              onChange={(e, i, editedCode) => this.setState({ editedCode })}
              options={{
                mode: 'python',
                theme: 'material',
                lineNumbers: true
              }}
            />
            <div
              style={{
                padding: '0.2rem',
                backgroundColor: 'rgb(38, 50, 56)',
                borderTop: 'solid 2px white'
              }}
            >
              <button
                style={{
                  border: 'none',
                  padding: '0.2rem',
                  fontSize: '0.8rem',
                  backgroundColor: 'transparent',
                  color: 'white',
                  cursor: 'pointer'
                }}
                onClick={this.interpretPython.bind(this)}
              >
                Ausführen
              </button>
            </div>
            {output}
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
