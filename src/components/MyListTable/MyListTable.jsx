import { Box, Modal, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useSession from "../../hooks/useSession";
import useCustomTheme from "../../hooks/useTheme";

const ImageCell = ({ row }) => (
  <img
    src={row.image}
    alt="Tourist Spot"
    className="rounded-md w-[100px] h-[50px] object-cover object-center my-2"
  />
);

const BtnCell = ({
  message,
  bgColor,
  spotId,
  type,
  tableData,
  setTableData,
  setDataLoading,
}) => {
  // router.delete("/delete-spot/:spotId", SpotController.deleteSpot);
  const { session } = useSession();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { theme } = useCustomTheme();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: theme === "0" ? "background.paper" : "#282a36",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const deleteFromDatabase = async (spotId) => {
    try {
      setDataLoading(true);
      const response = await session.delete(`/delete-spot/${spotId}`, {
        data: {
          uuid: user.uid,
        },
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedTableData = tableData.filter((item) => item._id !== spotId);
      setDataLoading(false);
      setTableData(updatedTableData);
      toast.success(response.data.message);
    } catch (error) {
      setDataLoading;
      console.log("Error: ", error);
    } finally {
      setDataLoading(false);
    }
  };

  const deleteSpot = (spotId) => {
    deleteFromDatabase(spotId);
  };

  const updateSpot = (spotId) => {
    navigate(`/update-spot/${spotId}`);
  };

  const closeModal = () => {
    handleClose();
    console.log(spotId);
    deleteSpot(spotId);
  };

  return (
    <>
      <button
        style={{ backgroundColor: bgColor }}
        className={`text-white px-4 py-1 rounded-md`}
        onClick={() => {
          if (type === "delete") handleOpen();
          else updateSpot(spotId);
        }}
      >
        {message}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this spot?
          </Typography>
          <button
            className="px-4 py-1 rounded bg-red-700 mt-2"
            onClick={closeModal}
          >
            Yes Delete
          </button>
        </Box>
      </Modal>
    </>
  );
};

const MyListTable = ({ tableData, setTableData, setDataLoading }) => {
  const { theme } = useCustomTheme();
  const data = tableData.map((item) => {
    const { image, touristSpotName, location, countryName, averageCost, _id } =
      item;
    return {
      image,
      touristSpotName,
      location,
      countryName,
      averageCost,
      _id,
      update: "Update it",
      delete: "Delete it",
    };
  });

  const columns = [
    {
      name: "Image",
      cell: (row) => <ImageCell row={row} />,
    },
    {
      name: "Tourist Spot Name",
      selector: (row) => row.touristSpotName,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Country Name",
      selector: (row) => row.countryName,
    },
    {
      name: "Average Cost",
      selector: (row) => row.averageCost,
    },
    {
      name: "Update",
      cell: (row) => (
        <BtnCell
          message={row.update}
          bgColor="blue"
          spotId={row._id}
          type="update"
          tableData={tableData}
          setTableData={setTableData}
        />
      ),
    },
    {
      name: "Delete",
      cell: (row) => (
        <BtnCell
          message={row.delete}
          bgColor="red"
          spotId={row._id}
          type="delete"
          tableData={tableData}
          setTableData={setTableData}
          setDataLoading={setDataLoading}
        />
      ),
    },
  ];
  const tableStyle = {
    headCells: {
      style: {
        backgroundColor: theme === "1" ? "#282a36" : "inherit",
        color: theme === "1" ? "#f8f8f2" : "inherit",
      },
    },
    cells: {
      style: {
        backgroundColor: theme === "1" ? "#282a36" : "inherit",
        color: theme === "1" ? "#f8f8f2" : "inherit",
      },
    },
  };

  return <DataTable columns={columns} data={data} customStyles={tableStyle} />;
  // return <DataTable columns={columns} data={data} />;
};

MyListTable.propTypes = {
  tableData: PropTypes.array,
  setTableData: PropTypes.func,
  setDataLoading: PropTypes.func,
};

export default MyListTable;
