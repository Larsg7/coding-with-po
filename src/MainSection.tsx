import * as React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import Instructors from './Instructors';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/python/python';
import './MainSection.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  width: '100vw'
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
  constructor(props: {}) {
    super(props);
    this.state = {
      code: ''
    };
  }

  componentDidMount() {
    this.startCodeWriting();
  }

  private startCodeWriting(index: number = 0) {
    this.setState({
      code:
        codeComplete.slice(0, index++) +
        (index < codeComplete.length ? '|' : '')
    });
    if (index < codeComplete.length) {
      setTimeout(() => this.startCodeWriting(index), 50);
    }
  }

  render() {
    return (
      <div style={styles}>
        <div
          style={{
            maxWidth: '600px',
            margin: '3rem auto',
            padding: '1rem'
          }}
        >
          <h2 style={{ margin: '0', marginBottom: '4rem' }}>
            Einführung in Python für Naturwissenschaftler
          </h2>
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <CodeMirror
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
          <Instructors />
        </div>
      </div>
    );
  }
}

export default MainSection;
