// These are the references to the react library
import * as React from "react";
import * as ReactDOM from "react-dom";

// This is how you import the components you need from the Office Fabric React Framework
import { Label } from "office-ui-fabric-react";

/**
 * Properties for the 'Demo' class
 *//*
interface Props {
    Demo Class: string;
}*/

interface IProps {
    customMessage: string;
}

/**
 * Demo Component
 */
export class Demo extends React.Component<IProps, null> {

    constructor(props: IProps) {
        super(props);
    }
    // Method to render the component
    public render() {
        return (
            <div>
                <Label>Office Fabric React Demo</Label>
                <Label disabled>{this.props.customMessage}</Label>
            </div>
        );
    }

}
// Get the "main" element
const target = document.querySelector("#main");
if (target) {
    // Render the component to it
    ReactDOM.render(<Demo customMessage="This was generated using the Office Fabric React framework."/> , target);

}
