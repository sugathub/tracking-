import React ,{useState, useEffect, useContext}from 'react';

//Internal import
import{
  Table,
  Form,
  Services,
  Profile,
  CompleteShipment,
  GetShipment,
  StartShipment,
}from"../Components/index";

import { TrackingContext } from '@/Context/Tracking';

const Index = () => {
  const{
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getShipmentsCount,
  }=useContext(TrackingContext);

  //state variable

  const [ createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel]= useState(false);

  //DATA STATE VARIABLE
  const [allShipmentsdata, setallShipmentsdata] = useState();

  useEffect(()=>{
    const getCampaignsData = getAllShipment();

    return async () =>{
      const allData =await getCampaignsData;
      setallShipmentsdata(allData);

    };
  },[]);
  return (
    <>
    <Services
       setOpenProfile= {setOpenProfile}
       setCompleteModal = {setCompleteModal}
       setGetModel= {setStartModal}
       />
       <Table
       setCreateShipmentModel ={setCreateShipmentModel}
       allShipmentsdata={allShipmentsdata}

        />
        <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
        />
        <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
        />
        <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
        />
        <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
        />
        <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
       StartShipment={StartShipment}
        />

</>
  );
};

export default Index;
