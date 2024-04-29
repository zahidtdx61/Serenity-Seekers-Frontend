import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import useCustomTheme from "../../hooks/useTheme";

const ImageCell = ({ row }) => (
  <img
    src={row.image}
    alt="Tourist Spot"
    className="rounded-md w-[100px] h-[50px] object-cover object-center my-2"
  />
);

const BtnCell = ({ message, bgColor }) => (
  <button
    style={{ backgroundColor: bgColor }}
    className={` text-white px-4 py-1 rounded-md`}
    onClick={() => console.log(message)}
  >
    {message}
  </button>
);

const MyListTable = ({ tableData }) => {
  const { theme } = useCustomTheme();
  const data = tableData.map((item) => {
    const { image, touristSpotName, location, countryName, averageCost } = item;
    return {
      image,
      touristSpotName,
      location,
      countryName,
      averageCost,
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
      cell: (row) => <BtnCell message={row.update} bgColor="blue" />,
    },
    {
      name: "Delete",
      cell: (row) => <BtnCell message={row.delete} bgColor="red" />,
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
};

export default MyListTable;
