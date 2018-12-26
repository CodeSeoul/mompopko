import React from "react";

const Contact = props => {
  function submit() {
    alert("submit");
  }

  return (
    <div className="contact">
      <form onSubmit={() => submit()}>
        <div>Email</div>
        <input type="text" />
        <div>Email Confirmation</div>
        <input type="text" />
        <div>Message</div>
        <input type="text" />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
