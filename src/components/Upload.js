
import React from 'react'
import "../css/Upload.css";

const axios = require("axios");


class Upload extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      sub_id: '',
      file: '',
      status: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('sub_id', this.state.sub_id);
    formData.append('file', this.state.file);
    const config = {
      headers: { "Content-Type": "multipart/form-data", "x-api-key": "4b75d44a-c0ee-491a-bcce-e7541e7c2489" }
    };
    axios.post("https://api.thecatapi.com/v1/images/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
        this.setState({
          status: 'success'
        })
      }).catch((error) => {
        console.log('error', error)
      });
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {

    console.log('state vote', this.props )
    return (
      <div className="upload__fileDiv" >
        <form onSubmit={this.onFormSubmit} style={{textAlign: 'left'}}>
          <div >
            <input type="file" onChange={this.onChange} />
            <button type="submit">Отправить</button>
          </div>
          
        </form>
      </div>
    )
  }
}

export default Upload

