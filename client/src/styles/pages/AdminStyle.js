import styled from "styled-components";

const AdminStyle = styled.div`
  padding: 3rem 5rem;
  #signout {
    border: none;
    font-size: 1.1rem;
    padding: 10px;
    display: block;
    float: right;
    margin: 5px 5px 0 0;
    position: relative;
    top: -45px;
    right: -80px;
  }

  .manage-stories {
    #add-stories-button {
      text-decoration: none;
      border: none;
      background-color: #4eba6f;
      color: white;
      font-size: 20px;
      border-radius: 5%;
      padding: 5px 10px;
      float: right;
    }
  }
`;
export default AdminStyle;
