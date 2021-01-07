import React from "react";
import { getLatestRaceResults } from "../../api";

import { EuiBasicTable, EuiLink, EuiHealth } from "@elastic/eui";

/*
Example user object:

{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}

Example country object:

{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}
*/

const latestResults = getLatestRaceResults();

export const Table = () => {
  const columns = [
    {
      field: "postion",
      name: "Position",
      sortable: true,
      "data-test-subj": "firstNameCell",
      mobileOptions: {
        render: (item) => (
          <span>
            {item.firstName}{" "}
            <EuiLink href="#" target="_blank">
              {item.lastName}
            </EuiLink>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true,
      },
    },
    {
      field: "driverNo",
      name: "No",
      truncateText: true,
      render: (name) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
      mobileOptions: {
        show: false,
      },
    },
    {
      field: "driverName",
      name: "Driver",
    },
    {
      field: "constructor",
      name: "Constructor",
    },
    {
      field: "laps",
      name: "Laps",
    },
    {
      field: "lapTime",
      name: "Time",
    },
    {
      field: "raceStatus",
      name: "Status",
    },
    {
      field: "pointsEarned",
      name: "Points",
    },
    {
      field: "nationality",
      name: "Nationality",
      render: (countryCode) => {
        const country = store.getCountry(countryCode);
        return `${country.flag} ${country.name}`;
      },
    },
    {
      field: "online",
      name: "Online",
      dataType: "boolean",
      render: (online) => {
        const color = online ? "success" : "danger";
        const label = online ? "Online" : "Offline";
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
    },
  ];

  const items = store.users.filter((user, index) => index < 10);

  const getRowProps = (item) => {
    const { id } = item;
    return {
      "data-test-subj": `row-${id}`,
      className: "customRowClass",
      onClick: () => {},
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: "customCellClass",
      "data-test-subj": `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiBasicTable
      items={items}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
};
