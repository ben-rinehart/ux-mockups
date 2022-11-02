import PropTypes from "prop-types";

function Table({ tableID }) {
  return (
    <table id={tableID} className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Status</th>
          <th className="text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Richard Lynch</td>
          <td>3306 W Pecan St</td>
          <td>
            <span className="badge badge-success">Active</span>
          </td>
          <td className="text-right">
            <button type="button" className="btn btn-link">
              <i className="fas fa-pen"></i>
            </button>
            <button type="button" className="btn btn-link text-danger">
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Tina Grant</td>
          <td>7037 N Stelling Rd</td>
          <td>
            <span className="badge badge-danger">Inactive</span>
          </td>
          <td className="text-right">
            <button type="button" className="btn btn-link">
              <i className="fas fa-pen"></i>
            </button>
            <button type="button" className="btn btn-link text-danger">
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td>Myrtle Cole</td>
          <td>2864 W 6th St</td>
          <td>
            <span className="badge badge-warning">Pending</span>
          </td>
          <td className="text-right">
            <button type="button" className="btn btn-link">
              <i className="fas fa-pen"></i>
            </button>
            <button type="button" className="btn btn-link text-danger">
              <i className="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Table.propTypes = {
  tableID: PropTypes.string,
};

export default Table;
