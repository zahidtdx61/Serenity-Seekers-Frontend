import { useState } from "react";
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
        <ScaleLoader size={40} color="#0E46A3" />
      </div>
    );

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-4">
        <MyListTable tableData={tableData} setTableData={setTableData} />
      </div>
    </div>
  );
};

export default MySpotList;
