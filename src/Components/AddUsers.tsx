import { ADD_TITLE } from "@/GraphQl/Mutations";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

const AddUsers = () => {
  const [title, setTitle] = useState("");
  const [body, setDescription] = useState("");
  const [] = useState()

  const [createPost, { data }] = useMutation(ADD_TITLE);
  console.log(data,"data");

//   const [addTitle] = useMutation(ADD_TITLE, {
//     variables: {
//       input: {
//         title: title,
//         body: body,
//       },
//     },
//     refetchQueries:['posts']
//   });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // await addTitle();
    try {
      const response = await createPost({
        variables: {
          input: {
            title,
            body,
          },
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      AddUsers
      <form action="">
        <input
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    
    <table>
        <tr>
            <th>Title</th>
            <th>Body</th>
        </tr>
        <tr>
            <td>{data?.createPost.title}</td>
            <td>{data?.createPost.body}</td>
        </tr>

    </table>

    </div>
  );
};

export default AddUsers;
