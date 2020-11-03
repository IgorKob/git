import React from "react";

class ProfileStatus extends React.Component {
  // statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status
  };
  activeEditMode = () => {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }

    let a = this.state;
    let b = this.props;
  }


  render() {
    return (
      <>
        {!this.state.editMode &&
          // <p onDoubleClick={this.activeEditMode}>{this.props.mystatus}</p>
          <p onClick={this.activeEditMode}>{this.props.status || '------kim status------'}</p>
        }
        {this.state.editMode &&
          <input autoFocus={true}
                 onBlur={this.deactivateEditMode}
                 onChange={this.onStatusChange}
                 value={this.state.status}
                 // ref={this.statusInputRef}
          />
        }
      </>
    )
  }
}

export default ProfileStatus;