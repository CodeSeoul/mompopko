import React from "react";
import EmailSubscriptionStyle from "../../../styles/container/EmailSubscriptionStyle/EmailSubscriptionStyle";

const EmailSubscription = props => {
  return (
    <EmailSubscriptionStyle>
      <div className="email-container">
        <div className="icon-wrapper">
          <i className="fa fa-envelope-open fa-sm" />
        </div>
        <form action="POST">
          <input placeholder=" E-mail" type="text" />
        </form>
      </div>
    </EmailSubscriptionStyle>
  );
};

export default EmailSubscription;
