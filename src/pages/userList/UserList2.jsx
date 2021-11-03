import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsers, deleteUser } from "../../context/userContext/apiCalls";

export default function MovieList() {
  const { users, dispatch } = useContext(UserContext);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 210 },
    { field: "isAdmin", headerName: "isAdmin", width: 210 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={
                params.row.profilePic ||
                "https://ih1.redbubble.net/image.618370650.1083/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              }
              alt="dp"
            />
            {params.row.username}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{ pathname: "/user/" + params.row._id, user: params.row }}
            >
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
