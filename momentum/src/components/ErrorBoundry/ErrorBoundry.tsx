import React, { Component } from "react";
import { ErrorIndicator } from "../ErrorIndicator";

export type ErrorBoundryState = {
    hasError: boolean;
};

export class ErrorBoundry extends Component<{}, ErrorBoundryState> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}
