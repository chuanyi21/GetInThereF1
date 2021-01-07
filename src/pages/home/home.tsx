import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
// import "@elastic/eui/dist/eui_theme_dark.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { getLatestRaceResults } from "../../api";

import { EuiCard, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui";
import { get } from "lodash";

class Home extends React.Component {
  routeToRaces = () => {
    let path = ``;
    let history = useHistory();
    history.push(path);
  };

  routeToTeams = () => {
    let path = "../../../teams/index.html";
    let history = useHistory();
    history.push(path);
  };

  routeToDrivers = () => {
    let path = ``;
    let history = useHistory();
    history.push(path);
  };

  routeToSillySeason = () => {
    let path = ``;
    let history = useHistory();
    history.push(path);
  };

  render() {
    const result = getLatestRaceResults;
    console.log(result);
    return (
      <div>
        <EuiSpacer size="s" />
        <EuiFlexGroup gutterSize="l">
          <EuiFlexItem>
            <EuiCard
              // icon={<EuiIcon size="xl" type="logoLogging" />}
              image="https://get-in-there-f1.s3-ap-southeast-1.amazonaws.com/i01_race.jpeg"
              title="Races"
              description="Results of the latest Formula 1 Grand Prix"
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              // icon={<EuiIcon size="xl" type="logoLogging" />}
              image="https://get-in-there-f1.s3-ap-southeast-1.amazonaws.com/i01_teams.jpg"
              title="Teams"
              description="All teams of the Formula 1 season"
              onClick={this.routeToTeams}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              // icon={<EuiIcon size="xl" type="logoLogging" />}
              image="https://get-in-there-f1.s3-ap-southeast-1.amazonaws.com/i01_drivers+(1).jpg"
              title="Drivers"
              description="All drivers of the Formula 1 season"
              onClick={() => {}}
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiCard
              image="https://get-in-there-f1.s3-ap-southeast-1.amazonaws.com/i01_sillyseason.jpg"
              title="Silly Season"
              description="Latest gossip and news from the paddock"
              onClick={() => {
                let path = `newPath`;
                let history = useHistory();
                history.push(path);
              }}
            />
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("main"));

export default Home;
