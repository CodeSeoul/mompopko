import styled from "styled-components";
import styleVar from "../../variables";

const EmailSubscriptionStyle = styled.div`
  .email-container {
    display: flex;
    flex-direction: row;
  }

  .icon-wrapper {
    height: 24px;
    padding: 0 4px;
    background-color: ${styleVar.secondaryDark};
    color: ${styleVar.primaryLight};
    border-radius: 5px 0 0 5px;
  }

  form {
    height: 20px;

    input {
      border-radius: 0 5px 5px 0;
      height: 20px;
      padding: 0;
      height: inherit;
    }
  }
`;

export default EmailSubscriptionStyle;
