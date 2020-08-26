import React, { Component } from "react";
import "./fetc-data.css";
class FetechData extends Component {
  constructor() {
    super();

    this.state = {
      usersArray: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ usersArray: users }));
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { usersArray, searchField } = this.state;
    const filterUser = usersArray.filter((user) =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">Users List</h1>
        <SearchBox placeholder="search user" handleChange={this.handleChange} />
        <CardList usersArray={filterUser} />
      </div>
    );
  }
}

const CardList = (props) => (
  <div className="card-list">
    {" "}
    {props.usersArray.map((user) => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);

const Card = (props) => (
  <div className="card-container">
    <img alt="user" src={`https://robohash.org/${props.user.id}?set=set2`} />
    <h2>{props.user.name}</h2>
    <p>{props.user.email}</p>
    <p>{props.user.username}</p>
    <Address address={props.user.address} />
  </div>
);

const Address = (props) => (
  <div className="address">
    <ul style={{ listStyle: "none" }}>
      <li>{props.address.street}</li>
      <li>{props.address.suite}</li>
      <li>{props.address.city}</li>
      <li>{props.address.zipcode}</li>
      <li>{props.address.geo.lat}</li>
      <li>{props.address.geo.lng}</li>
    </ul>
  </div>
);

const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  </div>
);
export default FetechData;
