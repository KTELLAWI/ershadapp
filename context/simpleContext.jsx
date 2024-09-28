"use client";
import { createContext, useState } from "react";
const ContextSimple = createContext();
function ContextProvider({ children }) {
  const [chooseAccount, setChooseAccount] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [openApplayOnWork, setOpenApplayOnWork] = useState(false);
  const [openApplayOpenWork, setOpenApplayOpenWork] = useState(false);
  const [savedApplay, setSavedApplay] = useState("");
  const [openIframeCv, setOpenIframeCv] = useState(false);
  const [informationCompanyToApplay, setInformationCompanyToApplay] =
    useState(null);
  const [idCurrentApplayToDelete, setIdCurrentApplayToDelete] = useState(null);
  const [userCurrentId, setUserCurrentId] = useState(null);
  const [valueCv, setValueCv] = useState(null);
  return (
    <ContextSimple.Provider
      value={{
        chooseAccount,
        setChooseAccount,
        openDelete,
        setOpenDelete,
        openApplayOnWork,
        setOpenApplayOnWork,
        savedApplay,
        setSavedApplay,
        openIframeCv,
        setOpenIframeCv,
        informationCompanyToApplay,
        setInformationCompanyToApplay,
        idCurrentApplayToDelete,
        setIdCurrentApplayToDelete,
        openApplayOpenWork,
        setOpenApplayOpenWork,
        valueCv,
        setValueCv,
        userCurrentId,
        setUserCurrentId,
      }}
    >
      {children}
    </ContextSimple.Provider>
  );
}

export { ContextProvider, ContextSimple };
