import styled from "styled-components";

const AdminStyle = styled.div`
  #signout {
    border: none;
    font-size: 1.1rem;
    padding: 10px;
    display: block;
    float: right;
    margin: 5px 5px 0 0;
  }

  .manage-stories {
    padding: 5rem 5%;

    #add-stories-button {
      text-decoration: none;
      border: none;
      background-color: #4eba6f;
      color: white;
      font-size: 20px;
      border-radius: 5%;
      padding: 5px 10px;
      display: block;
      float: right;
    }
    .wrapper {
      font-size: 1.5rem;
      margin-top: 3rem;
      padding: 1rem 3rem;
      border: 1px solid #ccc;
      box-shadow: 3px 3px 12px #ccc;
      text-align: center;
      h5 {
        margin: 50px 0 10px 0;
      }
      input {
        height: 2.5rem;
        width: 80%;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .level-input-container {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        align-items: center;

        input {
          width: 50px;
        }

        label {
          margin: 0 0 30px 0;
          position: relative;
          bottom: 11px;
        }
      }
      button {
        width: 150px;
        text-decoration: none;
        border: none;
        background-color: #4eba6f;
        color: white;
        font-size: 20px;
        border-radius: 10px;
        margin: 20px auto 0 auto;
        padding: 10px;
        display: block;
      }
    }
    .search-container {
      margin-top: 2rem;
    }

    .table-container {
      table {
        width: 100%;

        border: 1px solid #ccc;
        border-collapse: collapse;
        text-align: center;
        font-size: 1.2rem;

        td,
        th {
          padding: 1.2rem;
          border: 1px solid #ccc;
          margin: 0;
        }
      }
    }
  }
`;
export default AdminStyle;
