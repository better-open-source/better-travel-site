import React from "react";
import { ILayoutProps } from "../components/Layout/Layout";
import { Layout, SEO } from "../components";

export default class Page2 extends React.Component<ILayoutProps, {}>
{
    constructor(props: ILayoutProps) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <Layout>
                <div className="content">
                    <SEO title="Page 2" />
                    <h2>Page 2</h2>
                    <p className="lead">
                        You've made it to page 2.
                    </p>
                </div>
            </Layout>
        );
    }
}
