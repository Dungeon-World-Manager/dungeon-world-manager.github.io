import React from "react";
import { updateClasses } from "../../../functions/db";
import State from "../../../state";
import EditForm from "../components/editClassForm";

const BaseInfoEdit = ({ location: { hash } }) => {
  const state = React.useContext(State);
  const update = state.classes;
  const classID = hash.replace("#", "");
  console.log(classID);

  const [edit, setEdit] = React.useState({
    baseDamage: updateClasses.baseDamage,
    baseHp: updateClasses.baseHp,
    description: updateClasses.description,
    name: updateClasses.name,
    races: updateClasses.races,
    userId: updateClasses.userId,
  });

  // TODO Fix function to add updated data to firebase
  function classEdit(editClasses) {
    editClasses.update = updateClasses(editClasses);
    console.log(editClasses);
  }

  function editForm(e, { name, value }) {
    const newEdit = { ...edit };
    newEdit[name] = value;
    console.log(name, value);
    setEdit(newEdit);
  }

  return (
    <React.Fragment>
      <EditForm classEdit={classEdit} editForm={editForm} edit={edit} />
    </React.Fragment>
  );
};

export default BaseInfoEdit;
