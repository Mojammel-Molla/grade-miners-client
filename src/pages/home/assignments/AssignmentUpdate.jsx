import { useLoaderData } from 'react-router-dom';

const AssignmentUpdate = () => {
  const updateAssignment = useLoaderData();
  console.log(updateAssignment);
  return (
    <div>
      <h1>This is assignment update for {updateAssignment.title}</h1>
    </div>
  );
};

export default AssignmentUpdate;
