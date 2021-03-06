import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import { getSortCaret, sort, totalRowClass } from "../table-utilities"
import { getColumnsByDataField } from "../../utilities/content-utilities"

let columnsByDataField
const ROLE_DESCRIPTION = "role_description"
const ROLE_TOTAL_POSITIONS = "eoy_total_positions_for_role"

const StaffRolesTable = ({ data, content }) => {
  const TOTAL_ROW_NAME = content.labels.totalLabel
  columnsByDataField = getColumnsByDataField(content.columns)

  const createFirstRow = data => {
    const initialObject = {
      [ROLE_DESCRIPTION]: TOTAL_ROW_NAME,
      [ROLE_TOTAL_POSITIONS]: 0,
    }
    return data.reduce((returnObject, currentItem) => {
      returnObject[ROLE_TOTAL_POSITIONS] += +currentItem[ROLE_TOTAL_POSITIONS]
      return returnObject
    }, initialObject)
  }

  const firstRow = createFirstRow(data)
  data = data.concat([firstRow])

  const sortStaffRoles = (a, b, order, dataField, rowA, rowB) => {
    return sort(
      a,
      b,
      order,
      dataField,
      rowA,
      rowB,
      ROLE_DESCRIPTION,
      TOTAL_ROW_NAME
    )
  }

  const columns = [
    {
      dataField: ROLE_DESCRIPTION,
      text: columnsByDataField[ROLE_DESCRIPTION].displayName,
      headerFormatter: (column, colIndex, components) => {
        return (
          <div className="table-header">
            {columnsByDataField[ROLE_DESCRIPTION].displayName}{" "}
            {components.sortElement}
          </div>
        )
      },
      sort: true,
      sortCaret: getSortCaret,
      sortFunc: sortStaffRoles,
      searchable: false,
    },
    {
      dataField: ROLE_TOTAL_POSITIONS,
      text: columnsByDataField[ROLE_TOTAL_POSITIONS].displayName,
      headerFormatter: (column, colIndex, components) => {
        return (
          <div className="table-header text-right">
            {components.sortElement}{" "}
            {columnsByDataField[ROLE_TOTAL_POSITIONS].displayName}
          </div>
        )
      },
      sort: true,
      sortCaret: getSortCaret,
      sortFunc: sortStaffRoles,
      align: "right",
      searchable: false,
    },
  ]

  return (
    <ToolkitProvider
      keyField={ROLE_DESCRIPTION}
      data={data}
      columns={columns}
      bootstrap4
    >
      {props => (
        <div>
          <BootstrapTable
            classes=""
            bordered={false}
            rowClasses={(row, rowIndex) =>
              totalRowClass(row[ROLE_DESCRIPTION], content.labels.totalLabel)
            }
            {...props.baseProps}
            defaultSorted={[{ dataField: ROLE_TOTAL_POSITIONS, order: "desc" }]}
          />
        </div>
      )}
    </ToolkitProvider>
  )
}

export const query = graphql`
  fragment StaffRolesContent on ContentfulProgramDetailsPageTemplate {
    staffRolesTable {
      columns {
        displayName
        dataFieldName
      }
      heading
      labels {
        totalLabel
      }
    }
  }
  fragment StaffRolesData on CentralProgramsJson {
    staff_roles {
      eoy_total_positions_for_role
      role_description
    }
  }
`

StaffRolesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

StaffRolesTable.defaultProps = {
  data: [],
}

export default StaffRolesTable
