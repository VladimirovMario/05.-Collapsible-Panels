import './App.css';
import ExperimentalToggleWithAttribute from './components/ExperimentalToggleWithAttribute';
import ContainerWithKnownHeight from './components/ContainerWithKnownHeight';
import BasicCollapsiblePanel from './components/BasicCollapsiblePanel';
import CollapsiblePanelWithJavascript from './components/CollapsiblePanelWithJavascript';

// https://codesandbox.io/s/collapsible-panel-with-smooth-animation-in-react-from-scratch-forked-2258z4?file=/src/styles.css:0-821
// https://codesandbox.io/s/collapsible-y2x7ps?from-embed=&file=/src/App.tsx:293-315
// https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/5973616-use-the-transform-css-property-to-ensure-smooth-animations
// https://codepen.io/eliortabeka/pen/JOGVNW
// https://www.youtube.com/watch?v=1VsMKz4Zweg
// https://spin.atomicobject.com/collapse-component-react/
function App() {
    return (
        <div className="App">
            <h1>Collapsible Panel Examples</h1>
            <BasicCollapsiblePanel />
            <ExperimentalToggleWithAttribute />
            <ContainerWithKnownHeight />
            <CollapsiblePanelWithJavascript />
        </div>
    );
}

export default App;
