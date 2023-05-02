import React, { PureComponent } from 'react'

export default class About extends PureComponent {
    render() {
        return (
            <div className="mt-4 p-5 bg-secondary text-white ">
                <main className="px-3">
                    <h1 className="text-center">ABOUT US</h1>
                    <p className="lead text-center">On this site you can add recipes and also add your recipes.</p>
                </main>
            </div>
        )
    }
}
