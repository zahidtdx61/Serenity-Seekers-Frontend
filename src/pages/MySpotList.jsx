import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScaleLoader } from "react-spinners";
import useAsyncEffect from "use-async-effect";
import MyListTable from "../components/MyListTable/MyListTable";
import useAuth from "../hooks/useAuth";
import useSession from "../hooks/useSession";

const MySpotList = () => {
  const { user } = useAuth();
  const { session } = useSession();
  const [dataLoading, setDataLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  useAsyncEffect(async () => {
    const { uid } = user;
    try {
      setDataLoading(true);
      const response = await session.get(`/get-spot/user/${uid}`);
      setDataLoading(false);
      setTableData(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setDataLoading(false);
    }
  }, []);

  if (dataLoading)
    return (
      <div
        className={`w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center `}
      >
        <Helmet>
          <title>Serenity Seekers | My Tourist Spots List</title>
        </Helmet>
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  if (tableData.length === 0) {
    return (
      <div className="w-[95%] min-h-[calc(100vh-116px)] lg:max-w-screen-xl mx-auto   rounded-lg  mt-12 mb-8 p-2 md:p-4 lg:p-10  flex flex-col  justify-center  items-center ">
        <Helmet>
          <title>Serenity Seekers | My Tourist Spots List</title>
        </Helmet>
        <p className="text-4xl font-bold text-center">
          You have not added any tourist till now.{" "}
        </p>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Serenity Seekers | My Tourist Spots List</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto p-4">
        <MyListTable tableData={tableData} setTableData={setTableData} setDataLoading={setDataLoading} />
      </div>
    </div>
  );
};

export default MySpotList;
