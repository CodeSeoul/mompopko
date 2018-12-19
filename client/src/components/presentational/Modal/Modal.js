import React from "react";
import {
  ModalBackdrop,
  ModalContent,
  ModalCloseButton
} from "../../../styles/components/Modal/ModalStyle";

class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <ModalBackdrop onClick={() => this.props.onClose()}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalCloseButton onClick={() => this.props.onClose()}>
              <i className="fas fa-times-circle" />
            </ModalCloseButton>
            {this.props.children}
          </ModalContent>
        </ModalBackdrop>
      );
    }
  }
}

export default Modal;
