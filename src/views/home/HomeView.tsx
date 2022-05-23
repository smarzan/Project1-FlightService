import React from "react";


class HomeView extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="App container">
                <div className="jumbotron">
                    <h2>S M Airlines</h2>
                    <h3>Please select Flights or Passengers to view.</h3>
                </div>
            </div>
        );
    };
};

export default HomeView;