import React from "react";
import { updateClasses } from "../../../functions/db";
import State from "../../../state";
import EditForm from "../components/editClassForm";

const BaseInfoEdit = ({ location: { hash } }) => {
  const [fieldData, setFieldData] = React.useState(false);
  const state = React.useContext(State);
  const update = state.classes;
  const classID = hash.replace("#", "");
  console.log(classID);

  const getData = update.publicClasses.find((uc) => uc.id === classID) ?? {};
  console.log(getData);

  // const [updateData, setupdateData] = useState({
  //   races: [{ name: "none", names: [] }],
  //   name: "",
  //   baseDamage: "",
  //   description: "",
  //   baseHp: "",
  // });

  // React.useEffect(() => {
  //   attemptUpdateClasses();
  // });

  // async function attemptUpdateClasses() {
  //   if (fieldData) return;
  //   setFieldData(true);
  //   console.log(fieldData);
  //   try {
  //     const classes = await updateClasses();
  //     update.updateState(classes);
  //   } catch {}
  // }

  // function updateData(e, { name, value }) {
  //   const editData = { ...createClass };
  //   newClass[name] = value;
  //   setCreateClass(newClass);
  // }

  function classEdit(editClasses) {
    editClasses.update = updateClasses(editClasses);
    console.log(editClasses);
  }

  return (
    <React.Fragment>
      <EditForm classEdit={classEdit} getData={getData} />
    </React.Fragment>
  );
};

export default BaseInfoEdit;
